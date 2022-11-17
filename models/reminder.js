'use strict';

const mongoose = require('mongoose');
const moment = require('moment');

const ReminderSchema = new mongoose.Schema({
  name: String,
  userEmail: String,
  warningTime: Number,
  timeZone: String,
  time: { type: Date, index: true },
});

ReminderSchema.methods.requiresNotification = function (date) {
  return Math.round(moment.duration(moment(this.time).tz(this.timeZone).utc()
    .diff(moment(date).utc())
  ).asMinutes()) === this.warningTime;
};

ReminderSchema.statics.sendNotifications = function () {
  const searchDate = new Date();
  Reminder
    .find() // aplicar filtro aqui ao inves de cagada abaixo
    .then(function (reminders) {
      reminders = reminders.filter(function (Reminder) {
        return Reminder.requiresNotification(searchDate);
      });
      if (reminders.length > 0) {
        sendNotifications(reminders);
      }
    });

  function sendNotifications(reminders) {
    // Implementar envio por email e function com signalR
    for (const reminder of reminders) {
      // To-do
    }
  }
};


const Reminder = mongoose.model('Reminder', ReminderSchema);

module.exports = Reminder;
