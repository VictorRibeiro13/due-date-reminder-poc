'use strict';

const express = require('express');
const momentTimeZone = require('moment-timezone');
const moment = require('moment');
const reminder = require('../../models/reminder');
const router = new express.Router();


// GET: /reminders
router.get('/', function (req, res, next) {
  console.log("reminder", reminder.baseModelName)

  // return res.json({
  //   status: 200,
  //   reminders: 
  // })
});


// POST: /reminders
router.post('/', function (req, res, next) {
  const name = req.body.name;
  const userEmail = req.body.phoneNumber;
  const notification = req.body.notification;
  const timeZone = req.body.timeZone;
  const time = moment(req.body.time, 'MM-DD-YYYY hh:mma');

  const reminder = new reminder({
    name: name,
    userEmail: userEmail,
    notification: notification,
    timeZone: timeZone,
    time: time
  });
  reminder.save();

  return res.json({ status: 200, reminder })
});


module.exports = router;
