interface Appconfig {
    database: {
        host: string;
        port: number;
        name: string;
        user: string;
        password: string;
    };
    server: {
        host: string;
        port: number;
        debug: boolean;
    };
}
export declare const Config: Appconfig;
export {};
//# sourceMappingURL=config.d.ts.map