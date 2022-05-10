const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')

const router = express.Router();


router.get("/", asyncHandler(async (req, res) => {
    const stories = await db.Story.findAll();
    res.render("stories", {stories})
}));

router.get("/", asyncHandler(async (req, res) => {
    const story = await db.Story.findByPk()
}))


router.post("/", csrfProtection, asyncHandler(async(req, res) => {

}))



module.exports = router;
