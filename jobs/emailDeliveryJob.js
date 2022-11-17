'use strict';

const Reminder = require('../models/reminder');

const emailDeliveryJobFactory = function() {
  return {
    run: function() {
      Reminder.sendNotifications();
    },
  };
};

module.exports = emailDeliveryJobFactory();
