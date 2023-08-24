const express = require('express');
const { Comment } = require('../models');
const { isAuth } = require('./middlewares');
const router = express.Router();

router.get('/:feedId/:commentId', async () => {
  try {
  } catch (error) {}
});

router.post('/:feedId', isAuth, async (req, res, next) => {
  try {
    await Comment.create({
      content: req.body.content,
      userId: req.user.id,
      feedId: req.params.feedId,
    });

    return res.status(201).send('OK');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
