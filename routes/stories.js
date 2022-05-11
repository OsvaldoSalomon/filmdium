const express = require('express');
const { check, validationResult } = require("express-validator")
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')

const router = express.Router();


router.get("/", asyncHandler(async (req, res) => {
    const stories = await db.Story.findAll({
        include: {
            model: db.User,
            as: 'author'
        }
    });
    res.render("stories", { stories })
}));



router.get("/:id(\\d+)", csrfProtection, asyncHandler(async (req, res) => {

    const story = await db.Story.findByPk(req.params.id, {
        include: [{
            model: db.User,
            as: 'author',
        }, {
            model: db.Comment,
            include: db.User
        }, {
            model: db.Like
        }
        ]

    })
    let likes = await db.Like.count()
    const storyId = req.params.id
    res.render("story", { story, storyId, likes, csrfToken: req.csrfToken() })
}))


router.get('/new', csrfProtection, asyncHandler(async (req, res) => {
    const stories = await db.Story.findAll()
    res.render('storyForm', {
        stories,
        csrfToken: req.csrfToken(),
    });
}));

const storyValidators = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for the title'),

    check("content")
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for the content'),

    check('imgUrl')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Image Url')
]

router.post("/new", csrfProtection, storyValidators, asyncHandler(async (req, res) => {
    const { title, content, imgUrl } = req.body;

    const { userId } = req.session.auth


    const story = db.Story.build({ title, content, imgUrl, userId });

    const validatorErrors = validationResult(req)

    if (validatorErrors.isEmpty()) {
        await story.save();
        res.redirect("/stories")
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render("storyForm", { story, csrfToken: req.csrfToken(), errors })
    }

}))


router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
    const storyId = parseInt(req.params.id, 10);
    const story = await db.Story.findByPk(storyId);
    res.render('storyEdit', { story, csrfToken: req.csrfToken() })
}))

router.post('/:id(\\d+)/edit', csrfProtection, storyValidators, asyncHandler(async (req, res) => {
    const storyId = parseInt(req.params.id, 10);
    const storyToUpdate = await db.Story.findByPk(storyId);


    const { title, content, imgUrl, userId } = req.body;

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await storyToUpdate.update({ title, content, imgUrl, userId });
        res.redirect(`/stories/${storyId}`);
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('storyEdit', { story, csrfToken: req.csrfToken(), errors });
    }
}))

router.get('/:id(\\d+)/delete', csrfProtection, asyncHandler(async (req, res) => {
    const storyId = parseInt(req.params.id, 10);
    const story = await db.Story.findByPk(storyId);

    res.render("storyDelete", { story, csrfToken: req.csrfToken() })
}))

router.post('/:id(\\d+)/delete', csrfProtection, asyncHandler(async (req, res) => {
    const storyId = parseInt(req.params.id, 10);
    const story = await db.Story.findByPk(storyId);
    await story.destroy();
    res.redirect('/stories');
}))

module.exports = router;
