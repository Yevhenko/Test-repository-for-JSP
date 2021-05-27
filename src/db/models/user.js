module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING(200),
      lastName: DataTypes.STRING(200),
    },
    {},
  );
  User.associate = () => {
    // associations can be defined here
  };
  return User;
};
