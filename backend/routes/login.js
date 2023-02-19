const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/kakao', passport.authenticate('kakao'));

module.exports = router;
