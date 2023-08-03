const express = require('express');
const router = express.Router();
const sharp = require('sharp');
const { profileUpload, feedUpload } = require('../upload');
const { isAuth } = require('./middlewares');
const { BACK_DOMAIN } = require('../config/const');

const getFilePath = (path) => `${BACK_DOMAIN}/${path}`;

router.post('/profile', profileUpload.single('profile'), (req, res, next) => {
  try {
    return res.status(201).send(getFilePath(req.file.path));
  } catch (error) {
    return res.status(500).send('잠시 후 다시 시도해 주세요.');
  }
});

router.post('/feed', isAuth, feedUpload.array('images', 10), async (req, res, next) => {
  try {
    return res.status(201).send(req.files.map(({ path }) => getFilePath(path)));
  } catch (error) {
    return res.status(500).send('잠시 후 다시 시도해 주세요.');
  }
});

router.get('/metadata', async (req, res, next) => {
  try {
    const path = req.query.path.replace(/^\//, '');
    const { width, height } = await sharp(path).metadata();
    return res.status(200).send({
      width,
      height,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
