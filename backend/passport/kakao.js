require('dotenv').config();

const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
const { User } = require('../models/index');

module.exports = () => {
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_CLIENT_ID,
        callbackURL: '/oauth/kakao',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const user = await User.findOne({
            where: {
              snsId: profile.id,
              provider: 'kakao',
            },
          });

          if (user) return done(null, user);
          return done(null, false, profile);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};
