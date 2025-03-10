const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Song");
const User = require('../models/User');

// this api create a single song
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    // req.user gets the user because of passport.authenticate
    const { name, thumbnail, track } = req.body;
    if (!name || !thumbnail || !track) {
      return res
        .status(301)
        .json({ err: "Insufficient details to create song." });
    }
    const artist = req.user._id;
    const songDetails = { name, thumbnail, track, artist };
    const createdSong = await Song.create(songDetails);
    return res.status(200).json(createdSong);
  }
);

// this api will return all songs created by user i.e own created songs
router.get(
  "/get/mysongs",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const songs = await Song.find({ artist: req.user._id });
    return res.json({ data: songs });
  }
);

// Get route to get all songs any artist has published
// I will send the artist id and I want to see all songs that artist has published.
router.get(
  "/get/artist/:artistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { artistId } = req.params;
    // we can check if the artist does not exist.

    const artist = await User.findOne({ _id: artistId })
    if(!artist) {
        return res
            .status(301)
            .json({ error: `Artist doesn't Exist!` }); 
    }
    const songs = await Song.find({ artist: artistId });
    return res.json({ data: songs });
  }
);

// Get route to get a single song by name
router.get(
  "/get/songname/:songname",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { songname } = req.params;
    // name: songName --> exact name matching. vanilla, vanila
    // Pattern matching instead of direct name matching.

    const songs = await Song.find({ name: songname });
    return res.json({ data: songs });
  }
);

module.exports = router;
