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
                content: `While watching The Avengers, you can’t help but see the level of complexity in the
                story. I can image that bringing five different storylines/dynamic characters together for a
                summer blockbuster event must have been exhausting, but Whedon made it look easy. His script
                masterfully pulls together the diverse members of this superhero team to take on a threat
                long established in the Marvel universe.`,
                imgUrl: 'https://media.comicbook.com/2017/10/avengers-2-movie-poster-marvel-cinematic-universe-1038898.jpg',
                userId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'National Treasure',
                content: `Yet it is a definitely guilty pleasure, and 90 percent of the reason why can be
                summed up in two words: Nicolas Cage`,
                imgUrl: 'https://i.ebayimg.com/images/g/MXsAAOSwnONg-RWH/s-l400.jpg',
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'The Prestige',
                content: `A leap back to his stellar Memento form, Christopher Nolan\'s fifth feature is an
                incisive work about the nature of creative obsession. The film bursts forth fully
                formed, richly detailed, and with a keen eye toward Nolan\'s usual brushstrokes`,
                imgUrl: 'https://worleygig.com/wp-content/uploads/2006/10/the_prestige-e1445513409117.jpg',
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Oblivion',
                content: `An excellent scifi.  Tom Cruise usually doesn't disappoint and he adds another action sci-fi to his roster of characters, like Minority Report and War of the Worlds. Realistic, believable state of the art sets and special effects dazzle the eyes and imagination. Tom Cruise guards and hunts downed and then repairs sophisticated battle drones that guard water stations on a mostly decimated planet earth.  Most of the human race has relocated to Titan a Saturn moon, after aliens invade earth. Humanity defeats them with nuclear weapons that also makes earth mostly uninhabitable.
                Jack and his female partner live and operate from an earth mountain station to thwart sabotage attempts of the Scavengers. Not quite sure if these are the remnants of the defeated alien force, or the Scavengers are mutated human survivors from the radiation zone. The answer will unfold in time. When an old US spaceship crashlands, events take a turn that make Jack is question his own existence and the reality around him.
                A well acted cast following a well written story with plenty of well received exciting plot twists and pop up startling moments. The ending has a surprise too.`,
                imgUrl: 'https://flxt.tmsimg.com/assets/p9344844_p_v8_aa.jpg',
                userId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'The Fast and the Furious: Tokyo Drift',
                content: `I loved the slickness of this version. The music was fantastic and I loved the destination.   Very predictable and overused plot, but if you aren’t wanting to watch something serious and are fine to enjoy the cars, setting, and music it’s not a problem. Paul’s replacement was okay, but Han is my favorite of all the F&F characters. I rewatch it more than any of the others in the series. Plus the actual racing style and cars are the best in the franchise for me.`,
                imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_.jpg',
                userId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Remember the Titans',
                content: `Remember the titans is just such a great movie. It made me cry the way they just came together when times got rough and stood by each other's sides like that. I mean I am mixed so you know it's just so beautiful the way they didn't care what color each other were once they settled their differences. It was just beautiful. Like Julius said and I totally agree with this "Attitude shows leadership" -Julius. That is so true you know I mean I believe that I have a good attitude and that's why people say I am a great leader and such a good role model for people who look up to me. :)`,
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDKqEdqBXGea9pSfYEFxRVUZW0nQMIxBdRhA&usqp=CAU',
                userId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'The Matrix',
                content: `Saw this on its original release when I was 18. It was mind blowing... People lined the
                streets to see it. 22 years later all though effects are more seamless this movie still stands up
                as visually amazing. Great cast Reeves is the Messiah like Neo spurned on by Fishburnes enigmatic
                Morpheus. Moss is beautiful as Trinity and really gets in on the action which back in the late 90s was a huge shout out for the girl power movement.
                Much like Reeves later adventures with John Wick this would have been a satisfactory venture with
                just the one movie as the following installments were just overdone and proved lack lustre.
                The Matrix is one of the 90s best movies and one of cinemas all time greats.
                Visually stunning with a thought provoking premise which questions our view on reality!
                Absolutely outstanding soundtrack supports the action through out!!
                I give it only 4 stars as the only thing that bothers me everytime is the scenes on the ship...
                They just were too 'studio' for my liking!`,
                imgUrl: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
                userId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Interstellar',
                content: `This very movie is one where where we see the blend of Christopher Nolan's brillance in
                storytelling and his skill to connect emotion with intellegence.The final part of this film was
                 breathtaking, and also one could not say that 'they made up anything they wanted'. This is cause
                 famous physicist Kip Throne himself worked on the movie, and it's not logical to think that a
                 physicist would give incorrect scientific data. Matthew McConaughey's performance along with
                 other actors was also brilliant. It's a fantastic movie about space and time, and though it's a
                 bit confusing, watching it 2 to 3 times would clear all the doubts.One of the trigger points of
                 the movie is the perfectly rhythmic music composed by Hans Zimmer. Hats off to him man! The movie
                gives us a feeling of love, compassion, sacrifice, loss and reunion (along with science in every
                step) in such a way that audiences of varied taste would appreciate it with great satisfaction
                and pleasure in the end.`,
                imgUrl: 'https://streamcoimg-a.akamaihd.net/000/319/8174/3198174-BoxArt-9e0d93bd997a740ff2432a28d69c9c26.jpg',
                userId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Stories', null, {});
    }
};
