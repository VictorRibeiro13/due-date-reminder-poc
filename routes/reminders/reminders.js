'use strict';

const express = require('express');
const moment = require('moment');
const Reminder = require('../../models/reminder');
const router = new express.Router();


// GET: /reminders
router.get('/', async function (req, res, next) {
  const reminders = await Reminder.find();

  return reminders.length
    ? res.status(200).json(reminders)
    : res.status(404).json()
});

// POST: /reminders
router.post('/', function (req, res, next) {
  const name = req.body.name;
  const userEmail = req.body.userEmail;
  const warningTime = req.body.warningTime;
  const timeZone = req.body.timeZone;
  const time = moment(req.body.time, 'MM-DD-YYYY hh:mm');

  const reminder = new Reminder({
    name: name,
    userEmail: userEmail,
    warningTime: warningTime,
    timeZone: timeZone,
    time: time
  });
  reminder.save();

  return res.status(200).json(reminder);
});


module.exports = router;
