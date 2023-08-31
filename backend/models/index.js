require('dotenv').config();

const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = require('./user')(sequelize, Sequelize);
db.Feed = require('./feed')(sequelize, Sequelize);
db.FeedImage = require('./feedImage')(sequelize, Sequelize);
db.FeedRating = require('./feedRating')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

Object.keys(db).forEach((model) => {
  if (db[model]?.associate) db[model].associate(db);
});

// force: true일 경우 서버 실행 시 마다 테이블 재생성
sequelize.sync({ force: false }).then(() => {
  console.log('database connected');
});

module.exports = db;
