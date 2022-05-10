const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models')
const { loginUser, logoutUser, requireAuth } = require('../auth')

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

const userValidators = [
  check('fullName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Full Name')
    .isLength({ max: 50 })
    .withMessage('Full Name must not be more than 50 characters long'),
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for username')
    .isLength({ max: 50 })
    .withMessage('Username must not be more than 50 characters long'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];

router.post('/register', csrfProtection, userValidators,
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

router.get('/log-in', csrfProtection, (req, res) => {
  res.render('user-login', {
    title: 'Log-in',
    csrfToken: req.csrfToken(),
  })
})

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];


router.post('/log-in', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    console.log("IN THE LOGIN ROUTE")
    const {
      email,
      password,
    } = req.body;
    console.log(email, password)

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      console.log('Everything is okay')
      const user = await db.User.findOne({ where: { email } });

      console.log(user)

      if (user !== null) {

        console.log('--------------------------- Found User ------------------------------------')

        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

        console.log('--------------------------- passwordMatch ------------------------------------', passwordMatch)

        if (passwordMatch) {
          console.log('--------------------------- Before login User passwordMatch ------------------------------------', passwordMatch)
          loginUser(req, res, user)
          console.log('--------------------------- After login User passwordMatch ------------------------------------')
          return res.redirect('/');
        }
      }

      errors.push('Login failed for the provided email address and password');
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('user-login', {
      title: 'Login',
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
  }))

module.exports = router;
