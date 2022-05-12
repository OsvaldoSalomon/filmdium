const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')

const router = express.Router();
router.use((req, res, next) => {
    console.log("IN THE ROUTER &&*&&&&&&&&&&&&&&&")
    next()
})
router.post("/", asyncHandler(async (req, res) => {
    console.log("**************************************")
    const userId = req.session.auth.userId
    const { storyId } = req.body;

    // check if the user likes this story
    console.log(storyId, userId)
    const like = await db.Like.findOne({
        where: {
            storyId,
            userId
        }
    })

    if (!like) {
        console.log("****************It hit the no like **********************")
        await db.Like.create({
            userId,
            storyId
        })
        res.json({ message: "CreatedLike" })
    } else {
        console.log("**********************It hit the like success ****************")
        await like.destroy()
        res.json({ message: "DestroyLike" })
    }
}))

module.exports = router;
