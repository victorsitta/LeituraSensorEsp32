import { CreateUser } from "../service/users_service.js";
export class UserController {
    service = new CreateUser();
    async receberDados(req, res) {
        try {
            const dados = req.body;
            await this.service.executar(dados);
            return res.status(200).json({ status: "ok", message: "Usuário processado" });
        }
        catch (error) {
            return res.status(400).json({
                erro: error.message || "Erro interno no servidor!"
            });
        }
    }
}
//# sourceMappingURL=user_controller.js.map