const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')


router.post('/registration', userController.register)

module.exports = router