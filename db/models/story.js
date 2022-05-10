'use strict';
module.exports = (sequelize, DataTypes) => {
    const Story = sequelize.define('Story', {
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        imgUrl: DataTypes.TEXT,
        userId: DataTypes.INTEGER
    }, {});
    Story.associate = function (models) {
        // associations can be defined here
        const columnMapping = {
            through: 'Like',
            otherKey: 'userId',
            foreignKey: 'storyId',
            as: 'likes'
        }
        Story.belongsToMany(models.User, columnMapping);
        Story.belongsTo(models.User, { foreignKey: 'userId', as: 'author' })
        Story.hasMany(models.Comment, { foreignKey: 'storyId' });
        Story.hasMany(models.Like, { foreignKey: 'storyId' });
    };
    return Story;
};
