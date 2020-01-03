
//using express server
const express = require('express')
const http = require('http')
const cors = require('cors')
var app = express()
var profileRouter = require('./routes/profile')

app.use(cors())
app.use(express.json())

app.listen(4000)

// app.use(function(req,res) { //disallowing any middlewares beyond, sequence of middle wares matters
// 	console.log('the first middleware defined')
// 	res.json('i love you from the first middleware')
// })

app.get('/hello', function(req, res) {
	console.log('received GET on /hello')
	res.send({'msg':'i love you'})
})

app.use('/profile', profileRouter)

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