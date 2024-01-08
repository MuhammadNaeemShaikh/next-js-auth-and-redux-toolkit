
const mongoose = require("mongoose");

const connect = () => {
    mongoose
        .connect("mongodb+srv://matzsolutions:2VVG2QxBAMub9Oaz@cluster0.gyal2.mongodb.net/test")
        .then(() =>
            console.log("DB Connection Successfull!")
        )
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    connect
}
