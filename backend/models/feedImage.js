module.exports = (sequelize, DataTypes) => {
  const FeedImage = sequelize.define('FeedImage', {
    url: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    width: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  });

  FeedImage.associate = (models) => {
    FeedImage.belongsTo(models.Feed, { foreignKey: 'feedId', sourceKey: 'id' });
  };

  return FeedImage;
};
