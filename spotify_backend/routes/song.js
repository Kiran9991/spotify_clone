const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/create', passport.authenticate('user'), async(req, res) => {

})

module.exports = router;