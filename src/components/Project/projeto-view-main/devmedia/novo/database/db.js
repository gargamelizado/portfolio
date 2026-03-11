import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host     : 'localhost',
    port     : 3307,
    user     : 'root',
    password : '1234',
    database : 'clinica',       
    connectionLimit: 10
    
});

pool.getConnection().catch(err => console.log(err));

export default pool;