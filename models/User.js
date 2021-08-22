const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please enter your name']
  },
//   username: {
//     type: String,
//     required: [true, 'Plese create a unique username'],
//     unique : [true, 'Username already exists']
//   },
  email : {
     type: String, 
     required: [true, 'Enter your E-mail ID'],
     unique: [true, 'E-mail ID already exists ']
  },
  password : {
     type: String, 
     required: [true, 'Enter your E-mail ID'],
  },
  createdAt: {
   type: Date,
   default: Date.now
 }
//   qualification: {
//      type: String, 
//      required: true
//   },
//   interests: {
//      type: [String],
//      required : [true, 'Select some themes you are interested in '] 
//   },
//   gender: {
//      type: String,
//      required : [true, 'Select appropriate option']
//   },
  
});

module.exports = mongoose.model('users', UserSchema);
