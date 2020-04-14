//api
const express = require('express')
var bodyParser = require('body-parser')


const router = express.Router()
// router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true})) // can use more than one parser

router.get('/', function(req, res) {
    res.json('I love you from register')
})

router.post('/', function(req, res) {
    res.send('register received')
    console.log(req.body)
    add_user_info(req.body)
})


module.exports = {router}

//db add register info to redis
function add_user_info(info) {
    conn.hset('users', info.uname, info.pwd)
}

