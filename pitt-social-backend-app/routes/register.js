const express = require('express')
var bodyParser = require('body-parser')

const router = express.Router()
// router.use(bodyParser.json())
router.use(bodyParser.urlencoded()) // can use more than one parser

router.get('/', function(req, res) {
    res.json('I love you from register')
})

router.post('/', function(req, res) {
    
    res.send('register received')
})



module.exports = {router}