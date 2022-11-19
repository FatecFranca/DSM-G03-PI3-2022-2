require('dotenv').config()

var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require('./routes/index');

var app = express();

const connectDb = require('./config/database')
connectDb()

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const userRoute = require('./routes/user')
app.use('/user', userRoute)

const criterionRoute = require('./routes/criterion')
app.use('/criterion', criterionRoute)

const questionRoute = require('./routes/question')
app.use('/question', questionRoute)

const glossaryRoute = require('./routes/glossary')
app.use('/glossary', glossaryRoute)

const assessmentRoute = require('./routes/assessment')
app.use('/assessment', assessmentRoute)

const answerRoute = require('./routes/answer')
app.use('/answer', answerRoute)

module.exports = app;
