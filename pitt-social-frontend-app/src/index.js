import {BrowserRouter as Router, Route} from 'react-router-dom'
const React = require('react')
const ReactDOM = require('react-dom')
const Sidebar = require('./components').Sidebar
const Login = require('./components').Login
const MainPage = require('./MainPage/index').MainBody
const SearchPage = require('./SearchPage/index').MainBody
var $ = require('jquery')
const RegisterPage = require('./RegisterPage/index').MainBody
require('./style_sheets/index.css')





class MainBody extends React.Component {
    constructor(props) {
        super(props)
        //Add script tags
        var jQuery = <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        var font = <link href='https://fonts.googleapis.com/css?family=Alata|Wallpoet&display=swap' rel='stylesheet'/>
        var scripts = document.createElement('div')
        scripts.id = 'scripts'
        document.getElementsByTagName('head')[0].appendChild(scripts)
        ReactDOM.render(<div>{jQuery}{font}</div>, document.getElementById('scripts'))
    }

    render() {
        return (
            <Router>
                <Route exact path='/' render={({match, history }) => {
                    return <div className='text span_all absolute inline-block'>
                        <div>
                            <div className='LeftPartSecond'>
                                <h3> Welcome to Pitt Social<sup>2</sup> , aaaa xxxx </h3>
                                <hr />
                                <h3> aaa xxxx xxxx &nbsp;
                                    <abbr title='pitt affiliated person'>PAP</abbr>
                                </h3>
                                <h1 className='top_heading'> mmmmmm </h1>
                                <p> () => return x <br/>
                                    (() => console.log(this))()
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

