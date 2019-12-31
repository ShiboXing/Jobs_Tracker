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


// /* using express */
// var express = require('express')
// var bodyParser = require('body-parser')
// var app = express()

// app.listen(8000)
// var tweets = []

// app.get('/', function(req, res) {
// 	res.send('Welcome to Node Twitter')
// })

// app.post('/send', bodyParser.urlencoded({ extended: true }), function(req,res) {
// 	console.log(req.body)
// 	if (req.body && req.body.tweet) {
// 		tweets.push(req.body.tweet)
// 		res.send({status: 'ok', message:'Tweet received'})
// 	} else {
// 		res.send({status:'nok',message:'NO tweet received'})
// 	}
// })

// app.get('/tweets', function(req,res) {
// 	res.send(tweets)
// })


// //event loop experiment
// EE = require('events').EventEmitter;
// ee = new EE();
// die = false;

// ee.on('die', function() {
//  die = true;
// });

// setTimeout(function() {
// 	console.log('emit!')
//  ee.emit('die');
// }, 100);

// while(!die) {
// 	console.log('ashiba!')
// }

// console.log('done');

// closure sanity check
// var -> global window object
// for (var i = 0;i < 10;i++) {
// 	// setTimeout(() => {
// 	// 	console.log(i)
// 	// }, 100);
	
// 	(function (j) {
// 		console.log(j)
// 	})(i)
// 	var name = 'whoami'

// 	setTimeout(() => {
// 		console.log(i)
// 	},1000)

// }

// console.log(name)

//whichever server starts first will listen to the port
http = require('http')
http.Server(function(req, res) {
    res.writeHead(200);
    res.end(" disgusting hello world\n");
}).listen(8000);