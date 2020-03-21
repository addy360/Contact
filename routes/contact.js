const router = require('express').Router()
const { postContact, getContact, putContact, deleteContact } = require('../controller/contactController')

router.get('/',getContact)
router.post('/',postContact)
router.put('/:id',putContact)
router.delete('/:id',deleteContact)


module.exports = router