const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/kakao', (req, res, next) => {
  passport.authenticate('kakao', (error, user, info) => {
    if (error) return next(error);

    if (user) {
      // 로그인 세션 생성
      return req.login(user, (error) => {
        if (error) return next(error);
        res.redirect('http://localhost:3000');
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
      res.redirect('http://localhost:3000/user/signup');
    });
  })(req, res, next);
});

module.exports = router;
