const router = require("express").Router();
const path = require("path")
const isAuthenticated = require('../config/middleware/isAuthenticated')
// Routes starting with '/html/'

// router.get("/sampleroute", isAuthenticated, (req, res) => {
  // res.json("")
// })

module.exports = router;