const express = require('express')
    const jwtMiddleware = require('../middleware/jwtMiddleware')

    const login = require('../controller/adminController')
    

const router = new express.Router()
    router.post('/adminLogin',login.loginControl)
    router.get('/getuserdata',login.getUserData)

module.exports = router