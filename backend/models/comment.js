module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
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

  Comment.associate = (models) => {
    Comment.belongsTo(models.Feed, { foreignKey: 'feedId', sourceKey: 'id' });
    Comment.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id' });
  };

  return Comment;
};
