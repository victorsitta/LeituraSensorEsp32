import { pool } from '../database/connection.js';
export class userRepository {
    async getAllUsers() {
        const result = await pool.query('SELECT * FROM users');
        return result.rows;
    }
    async getUserById(id) {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0]; // o 0 é para retornar apenas o primeiro resultado, já que o ID é único
    }
    async createUser(user) {
        const result = await pool.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [user.email, user.password]);
        return result.rows[0];
    }
    async updateUser(id, user) {
        const result = await pool.query('UPDATE users SET email = $1, password = $2 WHERE id = $3 RETURNING *', [user.email, user.password]);
        return result.rows[0];
    }
    async deleteUser(id) {
        const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }
}
//# sourceMappingURL=users_repository.js.map