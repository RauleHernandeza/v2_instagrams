const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'Raul',
    password: 'Raul',
    database: 'instagram',
    port: '5432' 
})


const homeindex = async (req, res) => {
    const Q = await pool.query('select * from imagenes')
    //var r = Q.rows[0].titulo + " " + Q.rows[0].descripcion + " " + Q.rows[0].likes + " " + Q.rows[0].email_imagenes + " " + Q.rows[0].comentarios + " " + Q.rows[0].filename + " " + Q.rows[0].seguidores + " " + Q.rows[0].vistas
    var r = Q.rows[0].filename
    //var r = {"name":Q.rows[0].filename}
    console.log(r)
    //<div> a partir de esta linea es parte de index.hbs
    //<img src="/public/upload/{{r.name}}"> 
        //{{#each r}}
        
        //{{/each}}   
    //</div>
    res.render('index.hbs', {r})
}



module.exports = {
    homeindex
}