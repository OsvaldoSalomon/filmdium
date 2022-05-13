'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        content: 'Great Review!',
        userId: 2,
        storyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "I'll take notes",
        userId: 3,
        storyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'I like marvel better but nice review',
        userId: 3,
        storyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Best movie ever',
        userId: 3,
        storyId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'That movie was a masterpiece',
        userId: 4,
        storyId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "I'm not a big fan of this movie",
        userId: 5,
        storyId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'They should make more movies like this one',
        userId: 4,
        storyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Not just a great movie but they also had a great actor',
        userId: 5,
        storyId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Nicolas Cage is overrated',
        userId: 2,
        storyId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Appealing work you have here.',
        userId: 11,
        storyId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Just exquisite!',
        userId: 12,
        storyId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: `I think I'm crying. It's that nice.`,
        userId: 13,
        storyId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Outstandingly simple illustration.',
        userId: 14,
        storyId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'This is appealing work, friend.',
        userId: 15,
        storyId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'So fabulous and neat!!',
        userId: 16,
        storyId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Really thought out! Yes yes yes yes yes yes.',
        userId: 17,
        storyId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Nice work you have here.',
        userId: 18,
        storyId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'This review has navigated straight to my heart',
        userId: 19,
        storyId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Whoa.',
        userId: 20,
        storyId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
