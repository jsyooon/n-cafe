const passport = require('passport');
const { User } = require('../models/index');
const kakaoStrategy = require('./kakao');

module.exports = () => {
  // 사용자 정보를 세션에 저장
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // 세션으로부터 사용자 정보 복원
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: id });
      done(null, user);
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  kakaoStrategy();
};
