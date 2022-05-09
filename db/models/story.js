'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Story.associate = function(models) {
    // associations can be defined here
    Story.belongsTo(models.User, { foreignKey: 'userId' });
    Story.hasMany(models.Comment, { foreignKey: 'storyId' });
    Story.hasMany(models.Like, { foreignKey: 'storyId' });
  };
  return Story;
};
