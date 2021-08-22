const express = require('express');
const { attendance } = require('../controllers/attendance');
const router = express.Router();
const { getEvents, addEvent, deleteEvent, editEvent } = require('../controllers/events');
// const { newRegistration} = require('../controllers/newRegistration');


router
  .route('/:id/:code')
  .put(attendance);


module.exports = router;