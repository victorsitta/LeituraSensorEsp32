import { leituraRepository } from '../repository/leitura_repository.js';
import { Cultura } from '../types/graos/processarLeitura_interface.js';
export class ProcessarLeitura {
    repo = new leituraRepository();
    buffer = [];
    maxLen;
    // Usamos o Enum para definir os campos obrigatórios
    camposObrigatorios = [
        Cultura.SOJA,
        Cultura.FEIJAO,
        Cultura.MILHO,
        Cultura.TRIGO
    ];
    constructor(leiturasBuffer = 5) {
        this.maxLen = leiturasBuffer;
    }
    async executar(dados) {
        console.log("\n📥 NOVA LEITURA RECEBIDA");
        // 1. Validação e Conversão (Garantindo que os dados sigam a interface Leitura)
        const valores = this.validarEConverter(dados);
        // 2. Validação de Regras de Negócio (Limites)
        this.validarLimites(valores);
        // 3. Adiciona no Buffer (Lógica de deque)
        this.buffer.push(valores);
        if (this.buffer.length > this.maxLen) {
            this.buffer.shift();
        }
        console.log(`Buffer atual: ${this.buffer.length}/${this.maxLen}`);
        // 4. Salva a média quando o buffer encher
        if (this.buffer.length === this.maxLen) {
            await this.calcularMediaMovel();
        }
    }
    validarEConverter(dados) {
        const resultado = {};
        for (const campo of this.camposObrigatorios) {
            if (!(campo in dados)) {
                throw new Error(`Campo '${campo}' é obrigatório`);
            }
            const valorNumerico = Number(dados[campo]);
            if (isNaN(valorNumerico)) {
                throw new Error(`Valor do campo '${campo}' deve ser numérico`);
            }
            // TypeScript entende que 'campo' é uma chave válida de Leitura
            resultado[campo] = valorNumerico;
        }
        return resultado;
    }
    validarLimites(v) {
        // Usando sua interface Leitura com segurança de tipos
        if (v.SOJA < 20 || v.SOJA > 35)
            throw new Error("Soja fora do limite (20 - 35)");
        if (v.FEIJAO < 25 || v.FEIJAO > 40)
            throw new Error("Feijão fora do limite (25 - 40)");
        if (v.MILHO < 15 || v.MILHO > 30)
            throw new Error("Milho fora do limite (15 - 30)");
        if (v.TRIGO < 30 || v.TRIGO > 50)
            throw new Error("Trigo fora do limite (30 - 50)");
    }
    async calcularMediaMovel() {
        const total = this.buffer.reduce((acc, curr) => ({
            SOJA: acc.SOJA + curr.SOJA,
            FEIJAO: acc.FEIJAO + curr.FEIJAO,
            MILHO: acc.MILHO + curr.MILHO,
            TRIGO: acc.TRIGO + curr.TRIGO
        }), { SOJA: 0, FEIJAO: 0, MILHO: 0, TRIGO: 0 });
        const mediaSoja = total.SOJA / this.maxLen;
        const mediaFeijao = total.FEIJAO / this.maxLen;
        const mediaMilho = total.MILHO / this.maxLen;
        const mediaTrigo = total.TRIGO / this.maxLen;
        console.log("\n SALVANDO MÉDIA NO BANCO ");
        console.log(`Média Soja: ${mediaSoja.toFixed(2)}`);
        console.log(`Média Feijão: ${mediaFeijao.toFixed(2)}`);
        console.log(`Média Milho: ${mediaMilho.toFixed(2)}`);
        console.log(`Média Trigo: ${mediaTrigo.toFixed(2)}`);
        // Mantendo a chamada original do seu repository
        await this.repo.salvarLeitura(mediaSoja, mediaFeijao, mediaMilho, mediaTrigo);
    }
}
//# sourceMappingURL=leitura_service.js.map