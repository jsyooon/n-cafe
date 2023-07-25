const express = require('express');
const { isAuth } = require('./middlewares');
const { Feed, User } = require('../models');
const router = express.Router();

router.post('/', isAuth, async (req, res, next) => {
  try {
    const post = await Feed.create({
      content: req.body.content,
      userId: req.user.id,
    });

    return res.status(201).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
