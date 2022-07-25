const express = require('express')
const router = express.Router()
const fs = require('fs')
const axios = require('axios')
const { checkCookie } = require('../helper/cookies')
const userController  = require('../controller/UserController')
const GameHistoryRouter = require('./GameHistoryRouter')
const AuthRouterRouter = require('./AuthRouter')


router.get('/', (req,res)=>{
    const { cookies } = req
    res.render('homepage', {loggedIn: cookies.login?true:false, role:cookies.login?.role})
})

router.get('/play', checkCookie, (req,res)=>{
    const { cookies } = req
    res.render('play', {username: cookies.login.username})
})


router.get('/login', (req,res)=>{
    const { cookies } = req
    res.render('login', {loggedIn: cookies.login?true:false, role:cookies.login?.role})
})


router.use('/', AuthRouterRouter)
router.use('/', GameHistoryRouter)


module.exports = router