const express = require('express');
const { Op } = require('sequelize');
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
        req.body.images.map((data) =>
          FeedImage.create({
            ...data,
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

router.get('/all', async (req, res, next) => {
  try {
    const feeds = await Feed.findAll({
      limit: 15,
      offset: req.query.offset ?? 0,
      order: [
        ['createdAt', 'DESC'],
        [FeedImage, 'id', 'ASC'],
      ],
      include: [
        {
          model: FeedImage,
          attributes: ['url', 'width', 'height'],
        },
      ],
    });
    res.status(200).json(feeds);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
