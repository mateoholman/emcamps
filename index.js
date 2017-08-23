const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
const PORT = process.env.PORT || 5000;
const keys = require('./config/keys');

//Step 0: The authorization Google needs when making an auth request
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Access token: ', accessToken);
      console.log('Refresh token: ', refreshToken);
      console.log('Profile: ', profile);
    }
  )
);

//Step 1: Forward the User's request to Google
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

//Step 2: Take Google's access token and re-route the user
app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(PORT);
