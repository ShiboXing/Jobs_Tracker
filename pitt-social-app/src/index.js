const React = require('react')
const ReactDOM = require('react-dom')
require('./index.css')
const Sidebar = require('./components').Sidebar
const Login = require('./components').Login
// import {Sidebar, Login} from './components'

//import * as serviceWorker from './serviceWorker'
//ServiceWorker deprecated ???

// listReactFiles(__dirname).then(files => console.log(files))

class MainBody extends React.Component {
    render() {
        return (
            <div className='background'>
                <link href='https://fonts.googleapis.com/css?family=Alata|Wallpoet&display=swap' rel='stylesheet'/> 
                <div>
                    <div className='LeftPartSecond'>
                        <h3> Welcome to Pitt Social<sup>2</sup> , a platform for pitt affiliated people to social </h3>
                        <hr />
                        <h3> feel free to social, if you are a &nbsp;
                            <abbr title='pitt affiliated person'>PAP</abbr>
                        </h3>
                        <h1 className='top_heading'> How to social </h1>
                        <p> Add friends, add groups -> Send messages <br/>
                            You come, you see -> you conquer
                        </p>
                    </div>

                    <div className='RightPartFirst'>
                        <Sidebar />
                    </div>
                </div>
                <div className='fixedCenter' style={{height: '65%'}} >
                    <div id='MainTitle' >
                        <h1 className='glitch top_heading verticalCenter'>PITT&nbsp;SOCIAL<sup className='top_heading'>2</sup></h1>
                    </div> 
                    <div id='Login'>
                        <Login className="verticalCenter"/>
                    </div>
                    <Logo src={require('../res/pitt_logo.png')} width='60%' />  
                </div>         
            </div>
        )
    }    
}

class Logo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: props.width,
            height: props.height,
            src: props.src
        }
        let img = new Image()
        img.src = this.state.src;
        this.state.aspectRatio = ((parseFloat(img.height) / parseFloat(img.width)) * 100) + '%'
        console.log(this.state.aspectRatio)
    }

    render() {
        return (
            <div className='logo fillParent flexVerticalCenter'>
                <div className='absoluteCenter' style={{width: this.state.width, height: this.state.height}} >
                    <img className='grayscale StopRotate' src={this.state.src} alt='' style={{width: '100%'}} />
                </div>
            </div>
        )
    }
   
}

ReactDOM.render(<MainBody />, document.getElementById('root'))
// console.log(process.cwd())
//serviceWorker.unregister()
