'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Users', [
            {
                fullName: 'Demo User',
                username: 'demo',
                email: 'demo@demo.com',
                hashedPassword: 'password123',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Jorge Denis',
                username: 'jorgedenis',
                email: 'jorge@denis.com',
                hashedPassword: 'password123',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Justin Yi',
                username: 'justinyi',
                email: 'justin@yi.com',
                hashedPassword: 'password123',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Jacob Thompson',
                username: 'jacobthompson',
                email: 'jacob@thompson.com',
                hashedPassword: 'password123',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Osvaldo Salomon',
                username: 'osvaldosalomon',
                email: 'osvaldo@salomon.com',
                hashedPassword: 'password123',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
