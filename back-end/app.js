<<<<<<< Updated upstream
=======
//carrega as variaveis de ambiente (arquivo .env)
require('dotenv').config();

>>>>>>> Stashed changes
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

<<<<<<< Updated upstream
=======
//conexão com o banco de dados remoto
const connectDb = require('./config/database');
connectDb();

>>>>>>> Stashed changes
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
<<<<<<< Updated upstream
app.use('/users', usersRouter);
=======

/* Rotas da aplicação */

const userRoute = require('./routes/user')
app.use('/user', userRoute)

const assessmentRoute = require('./routes/assessment')
app.use('/assessment', assessmentRoute)

const glossaryRoute = require('./routes/glossary')
app.use('/glossary', glossaryRoute)

const criterionRoute = require('./routes/criterion')
app.use('/criterion', criterionRoute)

const answerRoute = require('./routes/answer')
app.use('/answer', answerRoute)

const questionRoute = require('./routes/question')
app.use('/question', questionRoute)
>>>>>>> Stashed changes

module.exports = app;
