const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    console.log('received GET from profile')
    res.json('i love you from profile')
    // console.log(req)
    // console.log(res)
})

module.exports = router
