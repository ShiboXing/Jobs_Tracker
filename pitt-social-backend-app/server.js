
//using express server
const express = require('express');
const cors = require('cors');
var app = express();

var httpRouter = require('./routes/http').router;
var profileRouter = require('./routes/profile').router;
var registerRouter = require('./routes/register').router;
 
app.use(cors())
app.use(express.json())
 
//specify the cors options to only accept cors requests from port 3000
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin','http://localhost:3000'); //当允许携带cookies此处的白名单不能写’*’
    res.header('Access-Control-Allow-Headers','content-type,Content-Length, Authorization,Origin,Accept,X-Requested-With'); //允许的请求头
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT'); //允许的请求方法
    res.header('Access-Control-Allow-Credentials',true);  //允许携带cookies
    next();
})

app.use('/profile', profileRouter);
app.use('/register', registerRouter);
app.use('/http', httpRouter);
app.get('/hello', function(req, res) {   //hello for testing
	console.log('received GET on /hello')
	res.send({'msg':'hello back'})
});


app.listen(4000)
console.log('Server running at http://127.0.0.1:4000/')


// //db
// const redis = require('redis')
// const conn = redis.createClient()

// conn.on('error', err => {
//     console.log('redis error ' + err)
// })




// @author: Shibo Xing

// function myBind(obj) {
//     var func = this;
//     func.prototype = obj;
//     var args1 = [];
//     for (let arg in arguments)
//         args1.push(arguments[arg]);
//     args1.shift();

//     return function() {
//         var new_obj = {};
//         new_obj.__proto__ = obj;
//         new_obj['bound'] = func;
//         var args2 = [];
//         for (let i in arguments) 
//             args2.push(arguments[i]);
//         return new_obj.bound(...args1.concat(args2));
//     }
// }

// function parent(a, b, c) {
//     console.log(`parent says ${a} ${b} ${c}`);
    
//     return this.word;
// }

// Function.prototype['myBind'] = myBind;

// var newP = parent.myBind({word: 'bubu'}, 1)
// console.log(newP(2, 5));

