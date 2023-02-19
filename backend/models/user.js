module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    snsId: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    provider: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    profileImage: {
      type: DataTypes.STRING(100),
    },
  });

  User.associate = (models) => {};

  return User;
};
