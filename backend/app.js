const path = require('path');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const loginRouter = require('./routes/login');
const oauthRouter = require('./routes/oauth');
const userRouter = require('./routes/user');
const feedRouter = require('./routes/feed');
const feedsRouter = require('./routes/feeds');
const uploadRouter = require('./routes/upload');
const passportConfig = require('./passport/index');
const { FRONT_DOMAIN } = require('./config/const');

const app = express();

require('dotenv').config();

require('./models/index');

passportConfig();

app.use(
  cors({
    origin: FRONT_DOMAIN,
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, // 세션 저장소에 데이터 저장 여부 설정. false일 경우 세션 데이터가 바뀌지 않는 한 세션 저장소에 저장하지 않음
    saveUninitialized: true, // 세션 구동 여부 설정. true일 경우 세션이 필요하기 전까지는 세션을 구동하지 않음
  })
);
app.use(cookieParser());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/login', loginRouter);
app.use('/oauth', oauthRouter);
app.use('/user', userRouter);
app.use('/feed', feedRouter);
app.use('/feeds', feedsRouter);
app.use('/upload', uploadRouter);

app.listen(3100, () => {
  console.log('App is running');
});
