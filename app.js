'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes');
const scheduler = require('./scheduler');
const cors = require('cors');
const mongoose = require('mongoose');
const cfg = require('./config')

const app = express();
app.use(cors())

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.locals.moment = require('moment');

app.use(routes);

mongoose.connect(cfg.mongoUrl, {
    useNewUrlParser: true,
});

scheduler.start();

module.exports = app;
