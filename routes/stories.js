const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')

const router = express.Router();

router.get('/new', csrfProtection, asyncHandler( async(req, res) => {
    console.log("-------------------------------- is this hitting? --------------------------------------")
    const stories = await db.Story.findAll()
    console.log(stories, "--------------------------------- hwo abotu now? ------------------------------------")
    res.render('storyForm', {
        stories,
        csrfToken: req.csrfToken(),
    });
  }));


router.get("/", asyncHandler(async (req, res) => {
    console.log('In get stories /')
    const stories = await db.Story.findAll({
        include: {
            model: db.User,
            as: 'author'
        }
    });
    console.log("--------- Stories -----------", stories[0].author);

    res.render("stories", { stories })
}));

router.get("/:id", asyncHandler(async (req, res) => {
    const story = await db.Story.findByPk(req.params.id, {
        include: {
            model: db.User,
            as: 'author'
        }
    })
    const author = await db.User.findByPk(story.userId);
    res.render("story", { story })
}))

// router.get("/new", csrfProtection, asyncHandler(async (req, res) => {
//     console.log("----------- before storuy.build------------")
//     const story = db.Story.build()
//     console.log("----------- story ------------")

//     res.render("storyForm", {story, csrfToken: req.csrfToken()})

// }))
router.use((req, res, next) => {
    console.log("--------- YOOOOOOOOOOOOOOOO THIS IS A TEST READ THIS MAN PLAEASD WORK ")
    next()
})


// router.post("/", csrfProtection, asyncHandler(async (req, res) => {
//     const {title, content, imgUrl, userId} = req.body;


//     res.render("storyForm", {})


// }))


module.exports = router;
