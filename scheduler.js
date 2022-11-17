'use strict';

const CronJob = require('cron').CronJob;
const emailDeliveryJob = require('./jobs/emailDeliveryJob');
const moment = require('moment');

const schedulerFactory = function() {
  return {
    start: function() {
      new CronJob('00 * * * * *', function() {
        console.log('Running Send Notifications Worker for ' +
          moment().format());
        emailDeliveryJob.run();
      }, null, true, '');
    },
  };
};

module.exports = schedulerFactory();
