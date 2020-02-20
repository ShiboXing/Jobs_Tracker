
//using express server
const express = require('express')
const http = require('http')
const cors = require('cors')
var app = express()
var profileRouter = require('./routes/profile').router
var registerRouter = require('./routes/register').router

app.use(cors())
app.use(express.json())

 
//specify the cors options to only accept cors requests from port 3000
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin','http://localhost:3000'); //当允许携带cookies此处的白名单不能写’*’
    res.header('Access-Control-Allow-Headers','content-type,Content-Length, Authorization,Origin,Accept,X-Requested-With'); //允许的请求头
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT'); //允许的请求方法
    res.header('Access-Control-Allow-Credentials',true);  //允许携带cookies
    next()
})

app.use('/profile', profileRouter)
app.use('/register', registerRouter)
app.get('/hello', function(req, res) {   //hello for testing
	console.log('received GET on /hello')
	res.send({'msg':'hello back'})
})



app.listen(4000)
console.log('Server running at http://127.0.0.1:4000/');

// var o = {p: 3}
// with(o) {
//     console.log(p)
// }

(function anon(){
    var o = 1
    console.log(this)
})()
