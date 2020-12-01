var express = require('express');


var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// session middleware
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');
//create an express app
var app = express()
// // load the env vars
 require('dotenv').config();

// // connect to the MongoDB with mongoose
require('./config/database');
// // configure Passport
require('./config/passport');

// require our routes
var indexRoutes = require('./routes/index');
var studentsRoutes = require('./routes/students');
var workoutRoutes= require('./routes/workout');


// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
console.log('view engine set up');
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// mount the session middleware
app.use(session({
  secret: 'SEI Rocks!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


// mount all routes with appropriate base paths
app.use('/', indexRoutes);
app.use('/students', studentsRoutes);
app.use('/workout', workoutRoutes);

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use(function(req, res) {
  res.send('Comment Submitted');
});

  // invalid request, send 404 page
  //app.use(function(req, res) {
  //res.status(404).send('Cant find that!');

app.use(function(req, res) {
  res.send('Workout Reserved');
});


module.exports = app;
