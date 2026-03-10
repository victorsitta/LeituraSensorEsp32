import { pool } from "../database/connection.js";

export class leituraRepository {

  async salvarLeitura(
    soja: number,
    feijao: number,
    milho: number,
    trigo: number
  ) {

    const query = `
      INSERT INTO readings (soja, feijao, milho, trigo, data_leitura)
      VALUES ($1,$2,$3,$4,NOW())
      RETURNING *
    `;

    const values = [soja, feijao, milho, trigo];

    try {

      console.log(" Salvando leitura no banco...");

      const result = await pool.query(query, values);

      console.log(" Leitura salva!");

      return result.rows[0];

    } catch (error) {

      console.error(" Erro ao salvar leitura:", error);
      throw error;

    }

  }

  async getAllReadings() {

    const result = await pool.query(
      "SELECT * FROM readings ORDER BY data_leitura DESC"
    );

    return result.rows;

  }

}