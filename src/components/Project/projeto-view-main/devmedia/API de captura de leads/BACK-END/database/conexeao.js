import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host     : 'localhost',
    port     : 3307,
    user     : 'root',
    password : '1234',
    database : 'cadastro',       
    connectionLimit: 10
});

export default pool;