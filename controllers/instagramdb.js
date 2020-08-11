const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'Raul',
    password: 'Raul',
    database: 'instagram',
    port: '5432' 
})

const getusers = async (req, res) => {
    
    try{
    const ra= 'raulehernandeza@gmail.com'
    const response = await pool.query('SELECT * FROM usuario where email = $1',[ra]);
    res.status(200).json(response.rows);
    }
    catch(err){
        res.send(err);
    }

}

const postusers = async (req, res) => {
    
    try{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const contras = req.body.contras;
    const privado = false;
    const response = await pool.query('insert into usuario values ($1, $2, $3, $4, $5)', [email, contras, privado, nombre, apellido]);
    console.log('todo bien')
    }
    catch(err){
        res.send('error en la creacion de usuario ' + err);
    } 

}

module.exports = {
    getusers,
    postusers
}