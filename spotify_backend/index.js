const express = require("express");
const mongoose = require('mongoose');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User = require('./models/User');
const authRoutes = require('./routes/auth');
const songRoutes = require("./routes/song");
require('dotenv').config();
const app = express();
const port = 8000;

app.use(express.json());

// connect mongodb to our node app.
// mongooose.connect() takes 2 arguments: 1. which db to connect to (db, url), 2. 2. connection options
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.t9elw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
).then((data) => console.log('connected to mongo!'))
.catch((error) => console.log('failed to connect to mongo!',error))

// setup passport-jwt
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        // done(error, doesTheUserExist)
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

// API : GET type : / : return text "hello world"
app.get('/', (req, res) => {
    // req contains all data for the request
    // res contains all data for the response
    res.send("Hello World") 
});

app.use('/auth', authRoutes);
app.use('/song', songRoutes);

// Now we want to tell express that our server will run on localhost:8000
app.listen(port, () => {
    console.log("app is running on port ", port)
});