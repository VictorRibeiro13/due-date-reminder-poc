'use strict';

require('dotenv-safe').config();

const cfg = {};

cfg.port = process.env.PORT || 3000;
cfg.secret = process.env.APP_SECRET || 'keyboard cat';
cfg.mongoUrl = process.env.MONGO_URL;
cfg.appEmail = process.env.APP_EMAIL;
cfg.appEmailPassword = process.env.APP_EMAIL_PASS;

console.log("cfg", cfg)

module.exports = cfg;
