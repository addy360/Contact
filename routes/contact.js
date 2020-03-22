const router = require('express').Router()
const { isAuth } = require('../middleware/auth')
const { check } = require('express-validator');
const { postContact, getContact, putContact, deleteContact } = require('../controller/contactController')

router.get('/', isAuth, getContact)
router.post('/', isAuth, [
		check('name','Contact name is required').not().isEmpty(),
		check('email','Valid E-mail is required').isEmail(),
	], postContact)
router.put('/:id', isAuth, putContact)
router.delete('/:id', isAuth, deleteContact)


module.exports = router