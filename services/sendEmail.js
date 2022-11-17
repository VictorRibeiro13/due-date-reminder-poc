var nodemailer = require('nodemailer');
var cfg = require('../config');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: cfg.appEmail,
        pass: cfg.appEmailPassword
    }
});

var sendEmail = async(emailTo) => {
    var mailOptions = {
        from: cfg.appEmail,
        to: emailTo,
        subject: 'Sua tarefa está para vencer',
        text: 'Entre na nossa plataforma para atualizar seu status 🥑'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error("Error sending Email:", error);
            return;
        }

        console.log('Email sent: ' + info.response);
    });
}

module.exports = { sendEmail };