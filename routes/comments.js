const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

const router = express.Router();

router.post("/", csrfProtection, asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    const { content, storyId } = req.body;
    await db.Comment.create({
        userId,
        content,
        storyId
    })
    res.redirect(`/stories/${storyId}`)
}))

// router.use((req, res, next) => {
//     console.log('THIS IS REQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ')
//     next()
// })

router.get("/comments/:id", csrfProtection, asyncHandler(async (req, res) => {
    res.render(`edit-comment`, { csrfToken: req.csrfToken() })
}))

router.put("/", csrfProtection, asyncHandler(async (req, res) => {
    const { content, storyId } = req.body;
    await db.Comment.update({
        userId,
        content,
        storyId
    })
    res.redirect(`/stories/${storyId}`)
}))

router.delete("/", csrfProtection, asyncHandler(async (req, res) => {
    const { content, storyId } = req.body;
    console.log(req.body)
    const comment = await db.Comment.findByPk()
    res.redirect(`/stories/${storyId}`)
}))

module.exports = router;
