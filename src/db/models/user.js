module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING(200),
      lastName: DataTypes.STRING(200),
    },
    {},
  );
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Project, { foreignKey: 'userId', sourceKey: 'id' });
  };
  return User;
};
