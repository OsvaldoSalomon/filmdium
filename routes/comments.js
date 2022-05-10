const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')

const router = express.Router();


router.get("/", asyncHandler(async (req, res) => {
    const comments = await db.Comment.findAll();
    res.render("comments", { comments })
}));

// router.get("/:id", asyncHandler(async (req, res) => {
//     const comment = await db.Comment.findByPk(req.params.id)
//     res.render("comment", {comment})
// }))

router.post("/", csrfProtection, asyncHandler(async (req, res) => {
    const {
        content
    } = req.body;

    db.Comment.create({
        content
    })
    const comments = await db.Comment.findAll();
    res.render('comments', { comments })
}))



module.exports = router;
