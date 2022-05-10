const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')

const router = express.Router();


router.get("/", csrfProtection, asyncHandler(async (req, res) => {
    const comments = await db.Comment.findAll();
    res.render("comments", { comments })
}));

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
