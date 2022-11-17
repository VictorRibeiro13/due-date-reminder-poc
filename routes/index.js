const express = require('express');
const routes = express.Router();
const reminder = require('./reminders/reminders')

routes.use('/reminder', reminder);
routes.use('/', reminder);

// catch 404 and forward to error handler
routes.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
routes.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
    });
});



module.exports = routes;