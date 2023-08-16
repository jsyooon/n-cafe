const express = require('express');
const { Feed, User } = require('../models');
const { FeedImage } = require('../models');
const { processFeedPreview } = require('../helpers/processFeed');
const router = express.Router();

router.get('/', async (req, res, next) => {
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
        {
          model: User,
          attributes: ['id', 'name', 'profileImage'],
        },
      ],
    });
    res.status(200).json(feeds.map((feed) => processFeedPreview(feed.toJSON(), req?.user?.id)));
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
