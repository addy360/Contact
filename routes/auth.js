const router = require('express').Router()
const { postAuth, getAuth} = require('../controller/authController')

router.get('/',getAuth)
router.post('/',postAuth)

module.exports = router