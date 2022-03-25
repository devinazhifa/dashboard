const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth')
const authChecker = require('../lib/authentication-checker')

router.use(authChecker.isUserNotAuthenticated)

router.get('/login', auth.login)
router.post('/login', auth.post.login)

module.exports = router