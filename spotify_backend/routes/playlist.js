const express = require("express");
const passport = require("passport");
const router = express.Router();
const Playlist = require("../models/Playlist");

// Route 1: Create a playlist
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const { name, thumbnail, songs } = req.body;
    if (!name || !thumbnail || !songs) {
      return res
        .status(301)
        .json({ err: "Insufficient details to create song." });
    }
    const playlistData = {
      name,
      thumbnail,
      songs,
      owner: currentUser._id,
      collaborators: [],
    };
    const playlist = await Playlist.create(playlistData);
    return res.status(200).json(playlist);
  }
);

// Route 2: Get a playlist by ID
// we will get the playlist ID as a route parameter and we will return the playlist having that ID
// If we are doing /playlist/get/:playlistId (focus on the :) --> this means that playlistId is now a variable to we can assign any value.
// If you call anything of the format
router.get(
  "/get/:playlistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    // This concept is called req.params
    const playlistId = req.params.playlistId;
    const playlist = await Playlist.findOne({ _id: playlistId });
    if(!playlist) {
        return res.status(301).json({ err: "Invalid Id" });
    }
    return res.json(playlist);
  }
);

module.exports = router;
