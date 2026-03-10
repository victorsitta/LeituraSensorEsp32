export declare class ProcessarLeitura {
    private repo;
    private buffer;
    private readonly maxLen;
    private readonly camposObrigatorios;
    constructor(leiturasBuffer?: number);
    executar(dados: any): Promise<void>;
    private validarEConverter;
    private validarLimites;
    private calcularMediaMovel;
}
//# sourceMappingURL=leitura_service.d.ts.map