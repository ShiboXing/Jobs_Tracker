const assert = require('assert'), 
    fetch = require('node-fetch') //fetch is not implemented in node

function testHello() {
    fetch('http://localhost:4000/hello',{
        method:'GET',
        mode:'cors',
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((result) => {
        return result.json()
    }).then((result) => {
        
        console.log(result)
        assert.deepEqual(result,{ 'msg': 'i love you' })
    })
}

testHello()
