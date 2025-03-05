const mongoose = require('mongoose');
// How to create a model
// Step 1: require mongoose
// Step 2: Create a mongoose schema (structure of a user)
// Step 3: Create a model

const User = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName : {
        type: String,
        required: false,
    }, 
    email: {
        type: String,
        requried: true,
    },
    username: {
        type: String,
        required: true
    },
    likedSongs: {
        // we will change this to array later
        type: String,
        default: "",
    },
    likedPlaylists: {
        // we will change this to array later
        type: String,
        default: '',
    },
    subcribedArtists: {
        // we will change this to array later
        type: String,
        default: '',
    }
});

const UserModel = mongoose.model('User', User);

module.exports = UserModel;