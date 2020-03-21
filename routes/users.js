const router = require('express').Router()

const { postUser } = require('../controller/usersController')


router.post('/',postUser)

module.exports = router