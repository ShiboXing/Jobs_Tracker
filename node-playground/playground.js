/* using net */

// let net = require('net')
// let chatServer = net.createServer(),
// 	clientList = []

// chatServer.on('connection', function(client) {
// 	client.name = client.remoteAddress + ':' + client.remotePort
// 	client.write('Hi!' + client.name + '!\n')

// 	clientList.push(client)
// 	//console.log(client)
// 	// client.write(clientList.length.toString()+' clients:\n')
	
// 	client.on('data', function(data) {
// 		broadcast(data,client.name)
// 	})

// 	client.on('end', function(data) {
// 		clientList.splice(clientList.indexOf(client), 1)
// 	})

// 	client.on('error', function(e) {
// 		console.log(e)
// 	})

// 	function broadcast(data,client_name) {
// 		clientList.forEach(client => {
// 			client.write(client_name + 'says: ' + data)
// 		})
// 	}


// 	// client.end()

// })

// chatServer.listen(9000)


/* using express */
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.listen(8000)
var tweets = []

app.get('/', function(req, res) {
	res.send('Welcome to Node Twitter')
})

app.post('/send', bodyParser.urlencoded(), function(req,res) {
	console.log(req.body)
	if (req.body && req.body.tweet) {
		tweets.push(req.body.tweet)
		res.send({status: 'ok', message:'Tweet received'})
	} else {
		//no tweet?
		res.send({status:'nok',message:'NO tweet received'})
	}
})

app.get('/tweets', function(req,res) {
	res.send(tweets)
})