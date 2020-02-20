var React = require('react')
var InputItem = require('../components.js').InputItem
require('../style_sheets/index.css')

class MainBody extends React.Component {
    
    constructor(props) {
        super(props)
        this.form= ( <form action='http://localhost:4000/register' method='POST' 
                        className='absoluteCenter' style={{left: '20%'}}>
                        <div >
                            <InputItem title='username' id='uname' name='uname'></InputItem>
                            <InputItem title='password' id='pwd' name='pwd' type='password'></InputItem>
                            <input type='submit' value='Submit'></input>
                        </div>
                    </form> )
                        
    }

    render() {
        return (this.form)
    }
}


(function() {
    function handler() {
        console.log(this.responseText)
    }
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:4000/register')
    xhr.addEventListener('load', handler)
    xhr.send()
})()

export {MainBody}