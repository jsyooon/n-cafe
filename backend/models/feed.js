module.exports = (sequelize, DataTypes) => {
  const Feed = sequelize.define(
    'Feed',
    {
      content: {
        type: DataTypes.STRING(10000),
        allowNull: false,
      },
    },
    {
      charaset: 'utf-8', // 한국어
      collate: 'utf8_general_ci',
    }
  );

  Feed.associate = (models) => {
    Feed.hasMany(models.FeedImage, { foreignKey: 'feedId', sourceKey: 'id' });
    Feed.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id' });
  };

  return Feed;
};
