
const express = require('express')
const cors = require('cors')
var app = express()

app.use(cors())
app.use(express.json())

app.listen(4000)


app.get('/hello', function(req, res) {
	console.log('received GET on /hello')
	//res.send({'msg':'i Love you'})
	res.json('i love you')
})



console.log('Server running at http://127.0.0.1:3000/');

