'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Stories', [
            {
                title: 'How to Watch a Movie Like a Film Critic',
                content: 'Advice from the pros on what to look for — Awards season can feel like showing up for the first day of school without ' +
                    'doing the summer reading: Your friends are talking character development, plot, conflict',
                imgUrl: 'https://miro.medium.com/max/1400/0*XzxPvfZnPIYK5r-i',
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'GRADE A FOR BATMAN',
                content: 'Finally it\'s here, one of my most anticipated films of 2022. Since day 1 I defended Pattinson\'s cast as Batman, he\'s one of the ' +
                    'best actors of his generation and I was completely sure that he just needed one chance to shut up the haters. And we also had ' +
                    'Matt Reeves directing the film, I love his work in Cloverfield, Let Me In and the Planet of the Apes franchise, ' +
                    'the dude is one of the best mainstream directors working today. Now, The Batman is not only incredible, is one of the best Batman films of ' +
                    'all the time.',
                imgUrl: 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1600041306046-ZKYYQ868MULDEN30MD3C/New+Poster+Art+For+THE+BATMAN5',
                userId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Avengers',
                content: 'While watching The Avengers, you can’t help but see the level of complexity in the story. ' +
                    'I can image that bringing five different storylines/dynamic characters together for a summer blockbuster event must have been exhausting, ' +
                    'but Whedon made it look easy. His script masterfully pulls together the diverse members of this superhero team to take on a threat ' +
                    'long established in the Marvel universe.',
                imgUrl: 'https://media.comicbook.com/2017/10/avengers-2-movie-poster-marvel-cinematic-universe-1038898.jpg',
                userId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'National Treasure',
                content: 'Yet it is a definitely guilty pleasure, and 90 percent of the reason why can be summed up in two words: Nicolas Cage',
                imgUrl: 'https://i.ebayimg.com/images/g/MXsAAOSwnONg-RWH/s-l400.jpg',
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'The Prestige',
                content: 'A leap back to his stellar Memento form, Christopher Nolan\'s fifth feature is an incisive work about the nature of creative obsession. ' +
                    'The film bursts forth fully formed, richly detailed, and with a keen eye toward Nolan\'s usual brushstrokes',
                imgUrl: 'https://worleygig.com/wp-content/uploads/2006/10/the_prestige-e1445513409117.jpg',
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Stories', null, {});
    }
};
