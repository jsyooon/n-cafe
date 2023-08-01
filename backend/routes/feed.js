const express = require('express');
const { isAuth } = require('./middlewares');
const { Feed } = require('../models');
const { FeedImage } = require('../models');
const router = express.Router();

router.post('/', isAuth, async (req, res, next) => {
  try {
    const feed = await Feed.create({
      content: req.body.content,
      userId: req.user.id,
    });

    if (req.body.images) {
      await Promise.allSettled(
        req.body.images.map((src) =>
          FeedImage.create({
            src,
            feedId: feed.id,
          })
        )
      );
    }

    return res.status(201).json(feed);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
