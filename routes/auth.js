const router = require('express').Router()
const { check } = require('express-validator');
const { postAuth, getAuth} = require('../controller/authController')
const { isAuth } = require('../middleware/auth')

router.get('/', isAuth, getAuth)
router.post('/', [
	check('email', 'Valid email is required').isEmail(),
	check('password', 'Password is required').exists(),
], postAuth)

module.exports = router