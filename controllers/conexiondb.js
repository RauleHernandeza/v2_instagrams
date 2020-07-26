const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'Raul',
    password: 'Raul',
    database: 'conexion',
    port: '5432' 
})

const getusers = async (req, res) => {
    const response = await pool.query('SELECT * FROM usuario');
    res.status(200).json(response.rows);
}

const postusers = async (req, res) => {
    
}

module.exports = {
    getusers,
    postusers
}