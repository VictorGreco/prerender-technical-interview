const express = require('express')

const router = express.Router()

router.get('/', (_req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  })
})

module.exports = router

