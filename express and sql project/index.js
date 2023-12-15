const express = require('express')
const dotenv = require('dotenv')

const app = express();
dotenv.config();


app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        msg: 'Rest api is working'
    })
})


app.listen(process.env.PORT || 2000, () => {
    console.log(`App is Running on Port ${process.env.PORT}`);
})