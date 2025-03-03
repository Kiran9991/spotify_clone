const express = require("express");
const passport = require("passport");
const router = express.Router();
const Playlist = require("../models/Playlist");
const Song = require("../models/Song");
const User = require('../models/User');

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
  "/get/playlist/:playlistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    // This concept is called req.params
    const playlistId = req.params.playlistId;
    // console.log('playlistid', playlistId, playlistId.length);
    const playlist = await Playlist.findOne({ _id: playlistId });//error when last char is changed to unknown
    // console.log('playlist', playlist)
    if(!playlist) {
        return res.status(301).json({ err: "Invalid Id" });
    }
    return res.json(playlist);
  }
);

// Get all playlists made by an artist
router.get(
  "/get/artist/:artistId",
  passport.authenticate("jwt", { session: false }),
  async(req, res) => {
    const artistId = req.params.artistId;

    const artist = await User.findOne({ _id: artistId });

    if(!artist) {
      return res.status(304).json({ err: "Invalid Artist Id" });//when err response is not showing
    }

    const playlists = await Playlist.find({ owner: artistId });
    return res.json({ data: playlists });
  }
);

// Add a song to a playlist
router.post(
  '/add/song',
  passport.authenticate("jwt", { session: false }),
  async(req, res) => {
    const currentUser = req.user;
    const { playlistId, songId } = req.body;
    // Step 0: Get the playlist if valid
    const playlist = await Playlist.findOne({ _id: playlistId });

    if(!playlist) {
      return res.status(304).json({ err: `Playlist does not exist ` });
    }
    // Step 1: Check if currentUser owns the playlist
    // console.log(playlist.owner , currentUser._id, playlist.owner == currentUser._id);
    // console.log(playlist.collaborators, currentUser, !playlist.collaborators.includes(currentUser._id))
    if(
      playlist.owner != currentUser._id && 
      !playlist.collaborators.includes(currentUser._id)
    ) {
        return res.status(400).json({ err: "Not Allowed" });
    }
    // Step 2: Check if the song is a valid song
    const song = await Song.findOne({ _id: songId }); 
    
    if(!song) {
      return res.status(304).json({ err: "Song does not exist " });
    }
    // Step 3: We can now simply add the song to the playlist
    playlist.songs.push(song);
    await playlist.save();

    return res.status(200).json(playlist);
  }
);

module.exports = router;
