const express = require('express');
const router = express.Router();
const { profileUpload } = require('../upload');
const { isAuth } = require('./middlewares');

router.post('/profile', isAuth, profileUpload.single('profile'), (req, res, next) => {
  try {
    return res.status(200).send(`http://localhost:3100/${req.file.path}`);
  } catch (error) {
    return res.status(500).send('잠시 후 다시 시도해 주세요.');
  }
});

module.exports = router;
