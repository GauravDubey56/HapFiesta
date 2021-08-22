const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },
  entry_fee: {
    type: Number,
    required: false
  },
  desc: {
     type: String,
     required : [true, 'Describe your event- themes, eligibilty, resources, etc., ']
  },
  eligibility: {
     type: String, 
     required: false
  },
  keywords: {
     type: String,
     required : [true, 'Add some keywords for the event to be popular'] 
  },
  registration_count: {
      type: Number,
      default: 0
  },
  reg_limit : {
      type: Number,
      required: false
  },
  team_size : {
      type: String,
      required : [true, 'Enter min and max no. of participants in a team e.g. 2-5']
  },
  registered_users : {
      type: [Object],
      required: false,
      default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Event', EventSchema);