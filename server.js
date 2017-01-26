const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// const passport = require('passport');

// const Strategy = required('passport-facebook').Strategy;

// passport.use(new Strategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: 'http://localhost:3000/login/facebook/return',
//     profileFields: ['email', 'displayName', 'id', 'picture.type(large)']
//   },
//   function(accessToken, refreshToken, profile, cb) {
    
//     return cb(null, profile);
//   }));

// passport.serializeUser(function(user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });


const app = express();

mongoose.connect('mongodb://migs:cook@ds141118.mlab.com:41118/miggy');

app.use('/', express.static(path.join(__dirname, '/public')));

const port = process.env.PORT || '3000';

app.listen(port, function () {
  console.log(' Example app listening on port 3000!');
});
