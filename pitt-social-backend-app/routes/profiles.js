const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.send('profile received GET')
    console.log(req)
    console.log(res)
})

module.exports = router
