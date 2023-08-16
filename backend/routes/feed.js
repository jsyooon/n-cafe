const express = require('express');
const { isAuth } = require('./middlewares');
const { Feed, User } = require('../models');
const { FeedImage } = require('../models');
const { processFeed } = require('../helpers/processFeed');
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

router.get('/:id', async (req, res, next) => {
  try {
    const feed = await Feed.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User,
          attributes: ['id', 'name', 'profileImage'],
        },
      ],
    });

    return res.status(200).json(processFeed(feed.toJSON(), req?.user?.id));
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
