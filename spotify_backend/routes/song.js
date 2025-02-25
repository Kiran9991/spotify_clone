const express = require('express');
const router = express.Router();
const passport = require('passport');
const Song = require('../models/Song');

router.post('/create', passport.authenticate('jwt', {session: false}), async(req, res) => {
    // req.user gets the user because of passport.authenticate
    const { name, thumbnail, track } = req.body;
    if(!name || !thumbnail || !track) {
        return res
            .status(301)
            .json({ err: "Insufficient details to create song." });
    }
    const artist = req.user._id;
    const songDetails = { name, thumbnail, track, artist };
    const createdSong = await Song.create(songDetails);
    return res.status(200).json(createdSong);
});

router.get('/get/mysongs', passport.authenticate('jwt', {session: false}), async(req, res) => {
    console.log(req.user)
    const songs = await Song.find({ artist: req.user._id });
    console.log(songs);
    return res.json({ data: songs });
})

module.exports = router;