
var express = require('express')

var app = express()
app.listen(4000)

app.get('/', function(req, res) {
	console.log('received GET on /')
	res.send('i Love you')
	console.log(res.res)
	return res.req
})



console.log('Server running at http://127.0.0.1:4000/');


