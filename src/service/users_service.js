import { userRepository } from '../repository/users_repository.js';
export class CreateUser {
    repo = new userRepository();
    async executar(dados) {
        console.log("\n📥 NOVA LEITURA DE USUÁRIO RECEBIDA");
        console.log("Salvando usuário:", JSON.stringify(dados, null, 2));
        await this.repo.createUser(dados);
    }
}
//# sourceMappingURL=users_service.js.map