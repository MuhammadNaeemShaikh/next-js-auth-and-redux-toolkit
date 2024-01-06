const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();


passport.use(
    new GoogleStrategy({
        clientID: '755309505753-8do9cgl6a6s9tp4t7l0fjrfmnggmckjr.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'http://localhost:3001/auth/google/callback'
    },
        (accessToken, refreshToken, profile, done) => {
            console.log("accessToken", accessToken);
            console.log("refreshToken", refreshToken);
            console.log("profile", profile);
            console.log("done", done);
        })
)


app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));


app.listen(3001, () => {
    console.log(`Server is listening on 3001`);
})