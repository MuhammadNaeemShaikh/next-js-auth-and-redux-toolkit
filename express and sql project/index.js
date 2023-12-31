const express = require('express')
const dotenv = require('dotenv')
const userRoute = require('./api/user/user.router')
const productRoute = require('./api/product/product.router')

const app = express();
dotenv.config();

//converting json object to javascript obj
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/user", userRoute)
app.use("/api/product", productRoute)



app.listen(process.env.PORT || 2000, () => {
    console.log(`App is Running on Port ${process.env.PORT}`);
})