module.exports = (sequelize, DataTypes) => {
  const Feed = sequelize.define(
    'Feed',
    {
      content: {
        type: DataTypes.STRING(2000),
        allowNull: false,
      },
    },
    {
      charaset: 'utf-8', // 한국어
      collate: 'utf8_general_ci',
    }
  );

  Feed.associate = (models) => {
    Feed.belongsTo(models.User, { foreignKey: 'userId', sourceKey: 'id' });
  };

  return Feed;
};
