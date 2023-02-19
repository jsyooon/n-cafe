module.exports = {
  development: {
    database: 'ncafe',
    username: 'root',
    password: process.env.DB_PASSWORD,
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
