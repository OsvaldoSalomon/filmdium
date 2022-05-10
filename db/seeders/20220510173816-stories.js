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
                imgUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVEhgSEhIYGBgVGBgYEhgSGBgSGBgaGBgZGRoYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QD00Py40NTQBDAwMEA8QGhISGDQhISExNDE0NDE0NDQ0NDQ0NDQxNDQ0MTExNDQ0NDQ0NDE0NDQ0NjE0NDQ0MTQxNDQ0ND80NP/AABEIAREAuAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA8EAACAgEDAQYFAgMFCAMAAAABAgARAwQSITEFEyJBUWEGMnGBkaHBFEKxByNSctEVJHOSsuHw8TM1U//EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAHxEBAQACAgIDAQAAAAAAAAAAAAECESExA0ESMlEi/9oADAMBAAIRAxEAPwDxuEIQMQlzTDB4e8Ljl9+zb02+DaCOu7r7R1aauuQnu/LaAMnPt8nT394BRhLeDuKHeFwaa9u0i7XbQI4Fbr+0ULp+8W2fZsG4it27byBxVbv0gFOEv6ddNxvOQeJd23bW3aN1cdd117SIjDt4LFtrX0ADbvD5fLt6/tAKsJe1A01N3ZyE2uzftqq8W6h1vpG5Rg2+HeW2LV0AHs774+WqqAU4S1jXCVbcWVqXZVMpO7xEigQNvQesmUaXfz3uzc3I2httDZxVXe6/pAM+EuqNPt5Z77s9Atd5Yof5a49bFwxLp9g3M4ba+6q27hXd1xdHm/tAKUJfVdNuW2ybaG6gu4Ha26uOabb9r+shzd1Q2biSvO4gANuPtyNu3059YBWhLqpp6Fu90m6gKBLHfXqAtV7yP+67wg7im/wkEBtm7mwRy239YBWhNBF0tizl27m3Abd23b4SOKvd19o3bptp8WTdsFcLXeW1g8fLwvvyYBRhLzjT0SpyXv8ACCV5SvM1w272+0owAhCEASEWKqkwBIS9h7LyvyFls9huo',
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
