const express = require('express');
const passport = require('./passport/passport');
const { connect } = require('./utils/db')

const authRoutes = require('./routes/user');

const app = express();

// ... Other middleware and configurations

connect();


app.use(passport.initialize());

// ... Other middleware and configurations

// Routes
app.use('/', authRoutes);

// ... Start your server

app.listen(3001, () => {
    console.log(`Server is listening on 3001`);
})