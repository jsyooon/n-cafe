const express = require('express');
const router = express.Router();
const { User } = require('../models');
const { isAuth, isUnAuth } = require('./middlewares');

router.get('/', async (req, res, next) => {
  try {
    if (!req.user) return res.status(200).json(null);

    const user = await User.findOne({
      where: { id: req.user.id },
      attributes: ['name', 'profileImage'],
    });

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/signup', isUnAuth, (req, res, next) => {
  const signupUser = req.session.signupUser;

  if (!signupUser) {
    return req.session.destroy(() => {
      res.clearCookie('signupUser');
      return res.status(401).json(null);
    });
  }

  res.status(200).json({
    name: signupUser.name,
    profileImage: signupUser.profileImage,
  });
});

router.post('/signup', isUnAuth, async (req, res, next) => {
  try {
    const signupUser = req.session.signupUser;

    if (!signupUser) {
      return res.status(401).send('사용자 정보가 존재하지 않습니다.');
    }

    await User.create({
      snsId: signupUser.snsId,
      provider: signupUser.provider,
      name: req.body.name,
      profileImage: req.body.profileImage,
    });

    return req.session.destroy(() => {
      res.clearCookie('signupUser');
      res.status(200).send('OK');
    });
  } catch (error) {
    next(error);
  }
});

router.get('/name', async (req, res, next) => {
  try {
    const name = await User.findOne({ where: { name: req.query.value } });
    if (!name) return res.status(200).send('ok');
    return res.status(409).send('이미 존재하는 닉네임입니다.');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
