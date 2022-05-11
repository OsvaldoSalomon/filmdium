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

module.exports = router;
