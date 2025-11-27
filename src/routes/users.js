const express = require('express')
const users = require('../data/users')

const router = express.Router()

router.get('/', (_req, res) => {
  res.json({
    count: users.length,
    users
  })
})

module.exports = router

