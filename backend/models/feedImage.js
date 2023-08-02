module.exports = (sequelize, DataTypes) => {
  const FeedImage = sequelize.define('FeedImage', {
    url: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    width: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    height: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
  });

  FeedImage.associate = (models) => {
    FeedImage.belongsTo(models.Feed, { foreignKey: 'feedId', sourceKey: 'id' });
  };

  return FeedImage;
};
