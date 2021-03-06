const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

const router = express.Router();

router.post("/", csrfProtection, asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    const { content, storyId } = req.body;
    if (content.length > 0) {
        await db.Comment.create({
            userId,
            content,
            storyId
        })
    }
    res.redirect(`/stories/${storyId}`)
}))

router.put("/:id", asyncHandler(async (req, res) => {
    const comment = await db.Comment.findByPk(req.params.id)
    comment.content = req.body.content
    if (comment.content.length > 0 && comment.content.length <= 255) {
        await comment.save()
        res.json({
            message: 'Success',
            commentContent: comment.content
        })
    } else {
        res.json({
            message: 'Failure',
            error: 'Your comment needs to be longer than 0 characters and smaller than 255 characters'
        })
    }
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
