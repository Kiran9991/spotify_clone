const express = require("express");
const mongoose = require('mongoose');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const cors = require('cors');
const User = require('./models/User');
const authRoutes = require('./routes/auth');
const songRoutes = require("./routes/song");
const playlistRoutes = require('./routes/playlist');
require('dotenv').config();
const app = express();
const port = 8000;


app.use(express.json());
app.use(cors());

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
passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        const user = await User.findById(jwt_payload.identifier); // FIXED: Use async/await & _id
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (err) {
        console.error("Error in Passport JWT:", err);
        return done(err, false);
    }
}));

// API : GET type : / : return text "hello world"
app.get('/', (req, res) => {
    // req contains all data for the request
    // res contains all data for the response
    res.send("Hello World") 
});

app.use('/auth', authRoutes);
app.use('/song', songRoutes);
app.use('/playlist', playlistRoutes);

// Now we want to tell express that our server will run on localhost:8000
app.listen(port, () => {
    console.log("app is running on port ", port)
});