const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')

const router = express.Router();


router.get("/", csrfProtection, asyncHandler(async (req, res) => {
    const comments = await db.Comment.findAll();
    res.render("comments", { comments, csrfToken: req.csrfToken() })
}));

// router.use((req, res, next) => { 
//     console.log('THIS IS REQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ')
//     next()
// })

router.post("/", csrfProtection, asyncHandler(async (req, res) => {
    const { userId } = req.session.auth
    const {content } = req.body;
    const storyId = 1
    console.log(req.originalUrl,'STORYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY')
    const comment = await db.Comment.create({
        userId,
        content,
        storyId
    })
    res.redirect(`/stories/${storyId}/comments`)
}))



module.exports = router;
