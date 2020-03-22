const router = require('express').Router()
const { check } = require('express-validator');

const { postUser } = require('../controller/usersController')


router.post('/',[
		check('name','Name is required').not().isEmpty(),
		check('email','Valid E-mail is required').isEmail(),
		check('password','Password should be atleast 6 or more characters').isLength({min:6}),
	],postUser)

module.exports = router