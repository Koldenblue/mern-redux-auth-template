const router = require("express").Router();
const path = require("path")
// Routes starting with '/html/'

// router.get("/members", isAuthenticated, (req, res) => {
//     res.json("this is members area which should return a members.html from public folder. will redirect to login if not logged in")
// })

// router.get("*", (req,res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"))
// })

module.exports = router;