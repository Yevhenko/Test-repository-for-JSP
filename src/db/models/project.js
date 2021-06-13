module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    'Project',
    {
      name: DataTypes.STRING(200),
      duration: DataTypes.TIME,
      status: DataTypes.STRING(200),
    },
    {},
  );
  Project.associate = (models) => {
    // associations can be defined here
    Project.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id' });
  };
  return Project;
};
