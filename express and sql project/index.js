const express = require('express')
const dotenv = require('dotenv')
const userRoute = require('./api/user/user.router')

const app = express();
dotenv.config();


app.use(express.json())
app.use("/api/user", userRoute)



app.listen(process.env.PORT || 2000, () => {
    console.log(`App is Running on Port ${process.env.PORT}`);
})