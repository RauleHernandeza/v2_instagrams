const path= require('path');
const { randomNumber} = require('../helpers/libs');
const fs = require('fs-extra');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'Raul',
    password: 'Raul',
    database: 'instagram',
    port: '5432' 
})

const index = async (req, res) => {
    
}

const create = async (req, res) => { 

    const saveimage = async ()=>{
        
    var imgurl = randomNumber();
    const ext = path.extname(req.file.originalname).toLowerCase();
    const y = imgurl + ext;
    const Q = await pool.query('select * from imagenes where filename = $1', [y])
    if(Q.length >0){
        saveimage();
    }
    else {
    //console.log(req.file); sirve par ver los datos que estoy pasando
    const pathimage = req.file.path;
    const targetpath= path.resolve(`public/upload/${imgurl}${ext}`) 
    
    if( ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
    console.log('es una imagen')
    await fs.rename(pathimage, targetpath)
    try{
    const titulo = req.body.title;
    const descripcion = req.body.description;
    const a= 'raulehernandeza@gmail.com'
    const b= 'descripcion'
    const c= 1
    const d= 'comentario'
    const e= 2
    const response = await pool.query('insert into imagenes values ($1, $2, $3, $4, $5, $6, $7, $8)', [titulo, descripcion , c, a, d, `${imgurl}${ext}`, e, c]);
    console.log('todo bien')
    res.send('todo bien');
    }
    catch(err){
        res.send('error en la subida de imagen ' + err);
        }
      //console.log(fs);
    } else{
        await fs.unlink(pathimage)
        console.log('NO es una imagen')
        res.send('error');
        }
    }
}
    
    saveimage();  
    
}

const like = async (req, res) => {
    
}

const comment = async (req, res) => {
    
}

const remove = async (req, res) => {
    
}

module.exports = {
    index,
    create,
    like,
    comment,
    remove
}