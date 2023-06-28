const express = require('express');
const passport = require('passport');
const router = express.Router();
const { FRONT_DOMAIN } = require('../config/const');

router.get('/kakao', (req, res, next) => {
  passport.authenticate('kakao', (error, user, info) => {
    if (error) return next(error);

    if (user) {
      // 로그인 세션 생성
      return req.login(user, (error) => {
        if (error) return next(error);
        res.redirect(FRONT_DOMAIN);
      });
    }

    const { provider, id } = info;

    // 회원가입용 세션 셍성
    req.session.signupUser = {
      provider,
      snsId: id,
      name: info._json.properties.nickname,
      profileImage: info._json.properties.profile_image,
    };

    return req.session.save(() => {
      res.redirect(`${FRONT_DOMAIN}/user/signup`);
    });
  })(req, res, next);
});

module.exports = router;
