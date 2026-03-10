import { ProcessarLeitura } from "../service/leitura_service.js";
export class LeituraController {
    service = new ProcessarLeitura();
    async receberDados(req, res) {
        try {
            const dados = req.body;
            await this.service.executar(dados);
            return res.status(200).json({ status: "ok", message: "Leitura processada" });
        }
        catch (error) {
            return res.status(400).json({
                erro: error.message || "Erro interno no servidor!"
            });
        }
    }
}
//# sourceMappingURL=leitura_controller.js.map