var express = require('express');
var router = express.Router();
const passport = require('passport');

// // The root route renders our only view
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', user: req.user });
  });

// // Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// // Google OAuth callback route
 router.get('/oauth2callback', passport.authenticate(
  'google',
   {
     successRedirect : '/',
     failureRedirect : '/'
   }
));

// // OAuth logout route
 router.get('/logout', function(req, res){
   req.logout();
   res.redirect('/');
 });

 router.post('/workouts', )

module.exports = router;
 