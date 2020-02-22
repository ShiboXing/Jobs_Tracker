const express = require('express')

const router = express.Router()

router.get('/', function(req, res) {
    console.log(req)
    res.json('i love you from profile')
})


module.exports = {router}
