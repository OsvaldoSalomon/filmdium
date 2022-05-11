const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')
const commentsRoutes = require('./comments')

const router = express.Router();

router.use('/:id/comments', commentsRoutes)

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


router.post("/", csrfProtection, asyncHandler(async (req, res) => {

}))


module.exports = router;
