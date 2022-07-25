const express = require('express')
const router = express.Router()
const userController  = require('../controller/UserController')

router.post('/login',userController.login)
router.get('/logout', userController.logout)
router.get('/register', userController.getRegister)
router.post('/register', userController.postRegister)


module.exports = router