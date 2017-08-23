const passport = require('passport');

module.exports = app => {
  //Step 1: Forward the User's request to Google
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //Step 2: Take Google's access token and re-route the user
  app.get('/auth/google/callback', passport.authenticate('google'));
};
