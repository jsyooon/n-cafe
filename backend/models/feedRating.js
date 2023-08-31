module.exports = (sequelize, DataTypes) => {
  const FeedRating = sequelize.define('FeedRating', {
    rating: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  });

  FeedRating.associate = (models) => {
    FeedRating.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id' });
    FeedRating.belongsTo(models.Feed, { foreignKey: 'feedId', targetKey: 'id' });
  };

  return FeedRating;
};
