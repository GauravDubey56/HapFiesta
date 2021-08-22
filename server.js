const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectDB = require('./config/db');
const passport = require("passport");
dotenv.config({ path: './config/config.env' });
connectDB();
const reg = require('./routes/reg')
const events = require('./routes/events');
const users = require('./routes/users');
const attendance = require('./routes/attendance');
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json())
app.use(express.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
//middlewares
//event middlewares
app.use('/api/v1/events', events);
app.use('/api/v1/reg', reg);
app.use('/api/v1/users', users);
app.use('/api/v1/attendance',attendance);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));