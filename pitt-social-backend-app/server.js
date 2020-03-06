
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
console.log('Server running at http://127.0.0.1:4000/')




//db
const redis = require('redis')
const conn = redis.createClient()

conn.on('error', err => {
    console.log('redis error ' + err)
})


votes = ["ZMNAGUEDSJYLBOPHRQICWFXTVK"]
dic = {}
for (var i in votes[0]) 
    dic[votes[0][i]] = (new Array(votes[0].length)).fill(0, 0, votes[0].length) //map skips empty items?
votes.forEach(e => {
    for (var i in e) dic[e[i]][i]++
})


console.log(dic['Z'] + '')
// for (var i in votes[0])
//     console.log(dic[votes[0][i]])

console.log(votes[0].split('').sort((a, b) => {
    // if (!(dic[a] > dic[b]) && !(dic[a] < dic[b])) 
    //     return a > b
    return dic[a].join('') < dic[b].join('')
}).join(''))



function copy(o) {
    var res = {}
    for (var k in o) {
        
        if (typeof o[k] == 'object' || Array.isArray(o[k]) && (!o[k] instanceof Function)) {
            res[k] = copy(o[k]);
        } 
        else
            res[k] = o[k];
    }

    return res;
}


var root = {}

function bsort(elem, root) {
    if(root.val == undefined) {
        root.val = elem
        root.left = {}
        root.right = {}
    }
    if (elem < root.val) 
        bsort(val, root.left)
    else if (elem > root.val)
        bsort(val, root.right)   
}

arr = [3,5,6,7,2,10]

for (var d in arr) {
    bsort(d, root);
}
