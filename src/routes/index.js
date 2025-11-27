const express = require('express')
const healthRouter = require('./health')
const usersRouter = require('./users')

const router = express.Router()

router.use('/health', healthRouter)
router.use('/users', usersRouter)

module.exports = router
