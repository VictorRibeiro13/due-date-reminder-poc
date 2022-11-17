'use strict';

const mongoose = require('mongoose');
const moment = require('moment');
const { sendEmail } = require('../services/sendEmail');

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
  ).asMinutes()) <= this.warningTime;
};

ReminderSchema.statics.sendNotifications = function () {
  const today = moment().startOf('day');

  Reminder
    .find({
      time: {
        $gte: today.toDate(),
        $lte: moment(today).endOf('day').toDate()
      }
    })
    .then(function (reminders) {
      reminders = reminders.filter(function (Reminder) {
        return Reminder.requiresNotification(new Date());
      });

      if (reminders.length > 0)
        sendNotifications(reminders);
    });

  async function sendNotifications(reminders) {
    for (const reminder of reminders) {
      try {
        await sendEmail(reminder.userEmail)
      } catch (err) {
        console.error("Error email", err)
      }

      await Reminder.deleteOne({ _id: reminder._id })
    }
  }
};


const Reminder = mongoose.model('Reminder', ReminderSchema);

module.exports = Reminder;
