const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')

const router = express.Router();

router.post("/", csrfProtection, asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    const { storyId } = req.body;

    await db.Like.create({
        userId,
        storyId
    })
    res.redirect(`/stories/${storyId}`)
}))

router.delete("/:id(\\d+)", csrfProtection, asyncHandler(async (req, res) => {
    const { storyId } = req.body;
    const likeId = parseInt(req.params.id, 10);

    const like = await db.Like.findByPk(likeId)

    await like.destroy();
    res.redirect(`/stories/${storyId}`)
}))

module.exports = router;
