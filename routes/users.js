const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')
const {loginUser, logoutUser, requireAuth} = require('../auth')

const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('layout');
});

router.get('/register', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken(),
  });
});


router.post('/register', csrfProtection,
  asyncHandler(async (req, res) => {
    const {
      fullName,
      username,
      email,
      password
    } = req.body;

    const user = db.User.build({
      fullName,
      username,
      email
    });
    const validatorErrors = validationResult(req);

    console.log(user)

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      res.redirect('/');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('register', {
        title: 'Register',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));

module.exports = router;
