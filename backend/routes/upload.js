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
    const data = await Promise.allSettled(
      req.files.map(async ({ path }) => {
        const metadata = await sharp(path).metadata();
        return {
          url: getFilePath(path),
          width: metadata.width,
          height: metadata.height,
        };
      })
    );
    return res.status(201).send(
      data.map(({ status, ...result }) => {
        if (status === 'fulfilled') return result.value;
        return { error: result.reason };
      })
    );
  } catch (error) {
    return res.status(500).send('잠시 후 다시 시도해 주세요.');
  }
});

module.exports = router;
