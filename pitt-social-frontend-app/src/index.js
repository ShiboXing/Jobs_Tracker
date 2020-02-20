const React = require('react')
const ReactDOM = require('react-dom')
import {BrowserRouter as Router, Route} from 'react-router-dom'
const Sidebar = require('./components').Sidebar
const Login = require('./components').Login
const MainPage = require('./MainPage/index').MainBody
const SearchPage = require('./SearchPage/index').MainBody
const RegisterPage = require('./RegisterPage/index').MainBody
require('./style_sheets/index.css')



//Add script tags
var jQuery = <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
var font = <link href='https://fonts.googleapis.com/css?family=Alata|Wallpoet&display=swap' rel='stylesheet'/>
var scripts = document.createElement('div')
scripts.id = 'scripts'
document.getElementsByTagName('head')[0].appendChild(scripts)
ReactDOM.render(<div>{jQuery}{font}</div>, document.getElementById('scripts'))


function helloGet(url) {
    fetch(url, {
        method: 'GET',
        mode:'cors',
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((result) => {
        return result.json() //returns a Promise
    }).then((result) => { // must use then to have the Promise resolved, otherwise pending
        console.log(result)
    }).catch((error) => {
        console.error('Hello Get Error:', error)
    }) // catches all the errors from above Promise resolution
}




class MainBody extends React.Component {
    componentDidMount() {
        helloGet('http://localhost:4000/hello')
    }

    render() {
        return (
            <Router>
                
                
                <Route exact path='/' render={({match, history }) => {
                    return <div className='text span_all absolute inline-block'>
                        <div>
                            <div className='LeftPartSecond'>
                                <h3> Welcome to Pitt Social<sup>2</sup> , a platform for pitt affiliated people to social </h3>
                                <hr />
                                <h3> feel free to social, if you are a &nbsp;
                                    <abbr title='pitt affiliated person'>PAP</abbr>
                                </h3>
                                <h1 className='top_heading'> How to social </h1>
                                <p> Add friends, add groups -> Send messages <br/>
                                    Search people, search message, be manager
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
                            <Logo src={require('../res/pitt_logo.png')} width='60%'  />  
                        </div>         
                    </div>
                            
                }}/>
                
                <Route exact path='/MainPage' render={(match, history) => {
                    return <MainPage></MainPage>
                }}/>

                <Route exact path='/Search' render={(match, history) => {
                    return  <SearchPage></SearchPage>
                }}/>
                
                <Route exact path='/Register' render={(match, history) => {
                    return <RegisterPage></RegisterPage>
                }}></Route>

            </Router>
        )
    }    
}

class Logo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: props.width,
            height: props.height,
            src: props.src,
            aspectRatio: ''
        }
        
    }
    /*useless -> I don't know how to maintain aspect ratio using padding-top */
    componentDidMount() {
        let img = new Image()
        img.src = this.state.src;
        this.setState({ aspectRatio: ((parseFloat(img.height) / parseFloat(img.width)) * 100) + '%'})
        //console.log(this.state.aspectRatio)
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
