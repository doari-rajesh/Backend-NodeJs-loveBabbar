const mongoose = require("mongoose");

//import dotenv
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Ka Connection is Successfull");
    })
    .catch((error) => {
      console.log(error);
      console.error(error.message);
    });
};

module.exports = dbConnect;
