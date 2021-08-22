const express = require('express');
const { attendance } = require('../controllers/attendance');
const router = express.Router();
const { getEvents, addEvent, deleteEvent, editEvent } = require('../controllers/events');
const { newRegistration} = require('../controllers/newRegistration');

router
  .route('/')
  .get(getEvents)
  .post(addEvent);

router
  .route('/:id')
  .delete(deleteEvent)
  .put(newRegistration);


module.exports = router;