import type {
    CreateUserDTO,
    UpdateUser
} from "../types/users/user.interface.js";

import { pool } from "../database/connection.js";

export class userRepository {

    async getAllUsers() {
        try {
            const result = await pool.query("SELECT id, email FROM users");
            return result.rows;

        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            throw error;
        }
    }

    async getUserById(id: number) {
        try {
            const result = await pool.query("SELECT id, email FROM users WHERE id = $1", [id]);
            return result.rows[0];

        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            throw error;
        }
    }

    async createUser(user: CreateUserDTO) {
        try {
            const result = await pool.query(`INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email`, [user.email, user.password]);
            return result.rows[0];

        } catch (error) {
            console.error("Erro ao criar usuário:", error);
            throw error;
        }
    }

    async updateUser(id: number, user: UpdateUser) {
        try {
            const result = await pool.query(`UPDATE users SET email = $1, password = $2 WHERE id = $3 RETURNING id, email`, [user.email, user.password, id]);
            return result.rows[0];

        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            throw error;
        }

    }

    async deleteUser(id: number) {
        try {
            const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING id", [id]);
            return result.rows[0];

        } catch (error) {
            console.error("Erro ao deletar usuário:", error);
            throw error;
        }
    }
}