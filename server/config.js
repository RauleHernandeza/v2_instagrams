module.exports = app => {
    
    //configuracion
    app.set('port', process.env.port || 3000);
    return app;
    
}

//<>