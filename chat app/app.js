require('dotenv').config
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);


//importing db
const { connect } = require('./utils/db');

//importing routes

const { UserRoute } = require('./routes/index');




//connecting db
connect();


app.use('/api/user', UserRoute);


server.listen(3001, () => {
    console.log(`server is listening on 3001`);
})

