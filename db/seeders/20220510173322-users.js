'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        options.tableName ='Users'
        return queryInterface.bulkInsert(options, [
            {
                fullName: 'Demo User',
                username: 'demo',
                email: 'demo@demo.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Jorge Denis',
                username: 'jorgedenis',
                email: 'jorge@denis.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Justin Yi',
                username: 'justinyi',
                email: 'justin@yi.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Jacob Thompson',
                username: 'jacobthompson',
                email: 'jacob@thompson.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Osvaldo Salomon',
                username: 'osvaldosalomon',
                email: 'osvaldo@salomon.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Doyle Koss',
                username: 'doylekoss',
                email: 'emanuel12@gmail.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Denise Heidenreich',
                username: 'deniseheidenreich',
                email: 'donna94@yahoo.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Brooke Nitzsche',
                username: 'brookenitzsche',
                email: 'elena93@hotmail.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Kathleen Ebert',
                username: 'kathleenebert',
                email: 'johnnie.Heathcote95@hotmail.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Kim Konopelski',
                username: 'kimkonopelski',
                email: 'Elisha.Franecki67@yahoo.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Dorothy Reinger',
                username: 'dorothyreinger',
                email: 'Elouise.Hayes@gmail.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Anita Shanahan',
                username: 'anitashanahan',
                email: 'Russel_Robel71@yahoo.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Katherine Terry III',
                username: 'katherinethethird',
                email: 'giovanni_Gibson@yahoo.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Claude Emard',
                username: 'claudeemard',
                email: 'reginald.Wuckert@hotmail.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Angelica Crist',
                username: 'angelicacrist',
                email: 'carlos16@gmail.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Wallace Zboncak',
                username: 'wallacezboncak',
                email: 'hazle28@gmail.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Gustavo White',
                username: 'jovanny_vandervort',
                email: 'jovanny_vandervort@hotmail.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Teresa Hartmann',
                username: 'teresahartmann',
                email: 'conor.Bradtke@hotmail.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Darlene Bode',
                username: 'darlenebode',
                email: 'abagail_dickinson52@gmail.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Peter Koelpin',
                username: 'peterkoelpin',
                email: 'alisha75@yahoo.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                fullName: 'Ian Ryan',
                username: 'ianryan',
                email: 'angel16@yahoo.com',
                hashedPassword: '$2a$10$/6UnBoYo3ZPFb3uXgiUVg.Cmkq6yYD9Papl0OSa6kG1.fUnw4gVX2',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        options.tableName ='Users'
        return queryInterface.bulkDelete(options);
    }
};
