const express = require('express')
const router = express.Router()


router.get('/', function(req, res) {
    res.json('I love you from register')
})

router.post('/', function(req, res) {
    console.log(req.body)
    res.send('register received')
    
})


module.exports = {router}