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
router.put("/:id", asyncHandler(async (req, res) => {
    const comment = await db.Comment.findByPk(req.params.id)
    comment.content = req.body.content
    await comment.save()
    res.json({
        message: 'Success',
        commentContent: comment.content
    })
}))

router.delete("/:id", asyncHandler(async (req, res) => {
    const comment = await db.Comment.findByPk(req.params.id)
    if (comment) {
        await comment.destroy()
        res.json({ message: 'Comment successfully deleted' })
    } else {
        res.json({ message: 'Failed to delete the comment' })
    }
}))

module.exports = router;
