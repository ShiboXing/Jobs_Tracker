var React = require('react')
var InputItem = require('../components.js').InputItem
var $ = require('jquery')
require('../style_sheets/index.css')

class MainBody extends React.Component {
    
    constructor(props) {
        super(props)
        this.form= (<form id='register_form'  method='POST' 
                        className='absoluteCenter' style={{left: '20%'}}>
                        <InputItem title='username' id='uname' name='uname'></InputItem>
                        <InputItem title='password' id='pwd' name='pwd' type='password'></InputItem>
                        <input type='submit' value='Submit'></input>
                    </form> )                   
    }

    componentDidMount() {
        $('#register_form').on('submit', e => {
            e.preventDefault()
            var inputs = $('#register_form input:not([type=submit])')
            console.log(inputs)
            var data = {} 
            for (var i in inputs) {
                data[inputs[i]['name']] = inputs[i]['value']
            }

            $.ajax({
                url:'http://localhost:4000/register',
                type: 'POST',
                data: data
            })
        })
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
})();

(() => console.log(this))(); // this proves react runs this in strict mode -> 'this' is undefined instead of global object



export {MainBody}

