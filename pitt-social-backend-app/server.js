
//using express server
const express = require('express')
const http = require('http')
const cors = require('cors')
var app = express()

app.use(cors())
app.use(express.json())

// app.listen(4000)


// app.get('/hello', function(req, res) {
// 	console.log('received GET on /hello')
// 	//res.send({'msg':'i Love you'})
// 	res.json('i love you')
// })

// console.log('Sergeger running at http://127.0.0.1:4000/');


//using http server
server = http.createServer()
server.on('request', function(req, res) {   
	console.log(req.method);
    console.log(req.headers);
	console.log(req.url);

	res.writeHead(200, {
		'Access-Control-Allow-Origin':'http://localhost:3000/'
	});

	res.write('i love you from http')
	res.end()
})
server.listen(4000)