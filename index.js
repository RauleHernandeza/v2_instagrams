const express = require('express');
const app = express();
const path =require('path');
const exphbs = require('express-handlebars');
const morgan =require('morgan');
const multer =require('multer');
const errorh = require('errorHandler');

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(multer({dest: path.join(__dirname, './public/upload/temp')}).single('image'));

//settings
app.listen(3000);
console.log(__dirname)
console.log('Server on port');
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayoutayout: 'main',
    partialsDir: path.join(app.get('views'), 'partials'),
    layoutsDir: path.join(app.get('views'), 'layaouts'),
    extname: '.hbs',
    helpers: require('./server/helps')
}))
app.set('views engine', '.hbs');

//routes
app.use(require('./routes/routes'));

//errorhandlers
if('development' === app.get('env')){
    app.use(errorh);
}

