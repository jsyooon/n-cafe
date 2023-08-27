const express = require('express');
const { isAuth } = require('./middlewares');
const { Feed, User } = require('../models');
const { FeedImage } = require('../models');
const { processFeed } = require('../helpers/processArticle');
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

    return res.status(201).send('OK');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const feedId = req.params.id;

    const updateFeed = async () => {
      await Feed.update(
        { content: req.body.content },
        {
          where: { id: feedId },
        }
      );
    };

    const updateImages = async () => {
      const originImages = await FeedImage.findAll({
        where: { feedId: feedId },
        order: [['createdAt', 'ASC']],
      });

      function* replaceImage() {
        let i = 0;
        while (req.body.images[i] || originImages[i]) {
          yield {
            added: req.body.images[i],
            original: originImages[i],
          };

          i++;
        }

        return;
      }

      for (let replacement of replaceImage()) {
        const { added, original } = replacement;
        if (added && !original) {
          FeedImage.create({
            ...added,
            feedId,
          });
          continue;
        }

        if (!added && original) {
          FeedImage.destroy({
            where: { id: original.id },
          });
          continue;
        }

        FeedImage.update(
          {
            ...added,
          },
          { where: { id: original.id } }
        );
      }
    };

    await Promise.allSettled([updateFeed(), updateImages()]);
    return res.status(200).send('OK');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const feed = await Feed.findOne({
      where: { id: req.params.id },
      order: [[FeedImage, 'id', 'ASC']],
      include: [
        {
          model: User,
          attributes: ['id', 'name', 'profileImage'],
        },
        {
          model: FeedImage,
          attributes: ['url', 'width', 'height'],
        },
      ],
      attributes: { exclude: ['userId'] },
    });

    return res.status(200).json(processFeed(feed.toJSON(), req?.user?.id));
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
