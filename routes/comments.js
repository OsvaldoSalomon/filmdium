const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')

const router = express.Router();


router.get("/", csrfProtection, asyncHandler(async (req, res) => {
    const comments = await db.Comment.findAll();
    res.render("comments", { comments , csrfToken: req.csrfToken() })
}));

router.post("/", csrfProtection, asyncHandler(async (req, res) => {
    const {
        userId,
        content
    } = req.body;
    console.log(req.body.content)
    await db.Comment.create({
        userId,
        content
    })
    res.redirect('/comments')
}))



module.exports = router;
