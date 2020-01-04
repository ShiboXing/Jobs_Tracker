
//using express server
const express = require('express')
const http = require('http')
const cors = require('cors')
var app = express()
var profileRouter = require('./routes/profile')


// var corsOption = {
// 	'origin': 'http://localhost:.LMNKJB VDVB3000/',
// 	optionSuccessStatus: 200
// }

// app.use(cors(corsOption))
app.use(cors())
app.use(express.json())
// app.use(function(req,res) { //disallowing any middlewares beyond, sequence of middle wares matters
// 	console.log('the first middleware defined')
// 	res.json('i love you from the first middleware')
// })
 
//specify the cors options to only accept cors requests from port 3000
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin','http://localhost:3000'); //当允许携带cookies此处的白名单不能写’*’
    res.header('Access-Control-Allow-Headers','content-type,Content-Length, Authorization,Origin,Accept,X-Requested-With'); //允许的请求头
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT'); //允许的请求方法
    res.header('Access-Control-Allow-Credentials',true);  //允许携带cookies
    next();
});

app.use('/profile', profileRouter)
app.get('/hello', function(req, res) {   //hello for testing
	console.log('received GET on /hello')
	res.send({'msg':'i love you'})
})


app.listen(4000)
console.log('Server running at http://127.0.0.1:4000/');


// //using http server 
// server = http.createServer()
// server.on('request', function(req, res) {   
// 	console.log(req.method)
//     console.log(req.headers)
// 	console.log(req.url)

// 	res.writeHead(200, {
// 		'Access-Control-Allow-Origin':'http://localhost:3000/'
// 	})

// 	res.write('i love you from http')
// 	res.end()
// })
// server.listen(4000)