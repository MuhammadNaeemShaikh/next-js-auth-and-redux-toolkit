const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const jwt = require('jsonwebtoken');
const { USER_MODEL } = require('../models/index');

// Google Strategy
passport.use(
    new GoogleStrategy(
      {
        clientID: '755309505753-8do9cgl6a6s9tp4t7l0fjrfmnggmckjr.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'http://localhost:3001/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log('accessToken', accessToken);
          console.log('refreshToken', refreshToken);
          console.log('profile', profile);
          console.log('done', done);
  
          // Check if the user exists in your database
          const user = await USER_MODEL.findOne({ email: profile.emails[0].value });
  
          if (user) {
            // User exists, generate JWT token with email
            const token = jwt.sign({ email: user.email }, 'your-secret-key');
            return done(null, { token });
          } else {
            // User doesn't exist, create a new user and generate JWT token
            const newUser = new USER_MODEL({
              email: profile.emails[0].value,
              // Other user properties
            });
  
            const savedUser = await newUser.save();
  
            const token = jwt.sign({ email: savedUser.email }, 'your-secret-key');
            return done(null, { token });
          }
        } catch (err) {
          return done(err, false);
        }
      }
    )
  );
  

// JWT Strategy
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your-secret-key'
},
    (jwtPayload, done) => {
        // Check if the user exists based on the email in the JWT payload
        USER_MODEL.findOne({ email: jwtPayload.email }, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }
));

module.exports = passport;
