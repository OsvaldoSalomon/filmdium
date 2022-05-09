'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
    Like.belongsToMany(models.User, { foreignKey: 'userId' });
    Like.belongsToMany(models.Story, { foreignKey: 'storyId' });
  };
  return Like;
};
