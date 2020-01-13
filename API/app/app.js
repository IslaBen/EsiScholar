
const cors = require('../app/middlewares/cors');
const errors = require('../app/middlewares/errors');
const accessLogStream = require('./middlewares/accessLogStream');

const express = require('express');
const logger = require('morgan');

// routes
const teacher = require('./routes/teacher');
const article = require('./routes/article');
// end routes

const bodyParser = require('body-parser');
// const formidableMiddleware = require('express-formidable');
const mongoose = require('../config/db');


const app = express();


// cors middleware
app.use(cors.corsHeaders);

// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));


// create an access log file
app.use(logger('combined', { stream: accessLogStream }));

// app.use(formidableMiddleware());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// public route
app.use('/scholarESI', teacher);
app.use('/scholarESI', article);


// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
app.use(errors.notFound);
// handle other errors
app.use(errors.handleOthers);


module.exports  = app;

