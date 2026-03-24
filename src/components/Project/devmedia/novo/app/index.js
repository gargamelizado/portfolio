import express from 'express';
import cors from 'cors';

import { retornaMedicos } from '../database/db_query.js';

const app = express();

app.use(cors());

app.get("/medicos", async (req, res) => {
    const horarios = await retornaMedicos();
    res.json(horarios);
})

app.listen(9000, () => {
    const data = new Date();
    console.log("Servidor Iniciado em: "+data);
})