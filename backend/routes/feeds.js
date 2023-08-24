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
    const feedWithReactions = await Promise.allSettled(
      feeds.map(async (feed) => {
        try {
          const comments = await feed.getComments({
            attributes: { exclude: ['feedId', 'userId'] },
            include: [{ model: User, attributes: ['id', 'name', 'profileImage'] }],
          });
          return {
            ...feed.toJSON(),
            recentComments: comments.slice(0, 2),
            reactions: {
              comments: comments.length,
            },
          };
        } catch (error) {
          next(error);
        }
      })
    );

    res.status(200).json(feedWithReactions.map((response) => processFeedPreview(response.value, req?.user?.id)));
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
