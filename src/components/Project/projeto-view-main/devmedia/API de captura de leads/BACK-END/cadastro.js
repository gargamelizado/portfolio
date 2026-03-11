import pool from "./database/conexeao.js";

export async function cadastraLead(nome, email, telefone) {
	const conexao = await pool.getConnection();

	const resposta = await conexao.query("INSERT INTO usuarios (nome, email, telefone) VALUES (?, ?, ?)", [nome, email, telefone]);
	conexao.release();

	return resposta;
}