'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        fullName: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        hashedPassword: DataTypes.STRING
    }, {});
    User.associate = function (models) {
        // associations can be defined here
        const columnMapping = {
            through: 'Like',
            otherKey: 'storyId',
            foreignKey: 'userId',
            as: 'likes'
        }
        User.belongsToMany(models.Story, columnMapping);
        User.hasMany(models.Story, { foreignKey: 'userId', as: 'author' })
        User.hasMany(models.Comment, { foreignKey: 'userId' });
        User.hasMany(models.Like, { foreignKey: 'userId' });

    };
    return User;
};
