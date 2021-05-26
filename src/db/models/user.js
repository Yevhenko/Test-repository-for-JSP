module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'Advertisement',
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
