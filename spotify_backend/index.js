const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = 8000;

console.log(process.env.MONGO_USERNAME,process.env.MONGO_PASSWORD)

// connect mongodb to our node app.
// mongooose.connect() takes 2 arguments: 1. which db to connect to (db, url), 2. 2. connection options
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.t9elw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
).then((data) => console.log('connected to mongo!'))
.catch((error) => console.log('failed to connect to mongo!',error))

// API : GET type : / : return text "hello world"
app.get('/', (req, res) => {
    // req contains all data for the request
    // res contains all data for the response
    res.send("Hello World") 
});

// Now we want to tell express that our server will run on localhost:8000
app.listen(port, () => {
    console.log("app is running on port ", port)
});