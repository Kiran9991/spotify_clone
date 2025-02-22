const express = require("express");
const app = express();
const port = 8000;

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