import pool from "./db.js";

export async function retornaMedicos() {
    const conexao = await pool.getConnection();

    const medicos_query = await conexao.query('SELECT id, nome, telefone, email, especialidade FROM medicos');
    const medicos = medicos_query[0];

    conexao.release();

    return medicos;
}