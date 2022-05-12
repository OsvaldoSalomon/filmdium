const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')

const router = express.Router();

router.post("/", asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    const { storyId } = req.body;
    const likesCount = await db.Like.count()
    const like = await db.Like.findOne({
        where: {
            storyId,
            userId
        }
    })
    if (!like) {
        await db.Like.create({
            userId,
            storyId
        })
        res.json({ message: "CreatedLike", likesCount })
    } else {
        await like.destroy()
        res.json({ message: "DestroyLike", likesCount })
    }
}))

module.exports = router;
