const passport = require('../passport/passport');
const { USER_MODEL } = require('../models/index');

const signUpAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

const googleCallbackAuth = (req, res, next) => {
    // Passport middleware adds user to request object
    passport.authenticate('google', { session: false }, (err, user) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            // Handle authentication failure
            return res.status(401).json({ success: false, message: 'Authentication failed' });
        }

        // Redirect or respond after successful Google Sign-In
        res.json({ token: user.token });
    })(req, res, next);
};
module.exports = { signUpAuth, googleCallbackAuth };
