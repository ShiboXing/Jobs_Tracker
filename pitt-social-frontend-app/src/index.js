import {BrowserRouter as Router, Route} from 'react-router-dom'
const React = require('react')
const ReactDOM = require('react-dom')
const Sidebar = require('./components').Sidebar
const Login = require('./components').Login
const MainPage = require('./MainPage/index').MainBody
const SearchPage = require('./SearchPage/index').MainBody
const RegisterPage = require('./RegisterPage/index').MainBody
const HTTPPage = require('./HTTPPage/index').Mainbody
require('./style_sheets/index.css')
require('./style_sheets/home.css')



class MainBody extends React.Component {

    render() {
        return (
            <Router>
                <link href='https://fonts.googleapis.com/css?family=Alata|Wallpoet&display=swap' rel='stylesheet'/>
                <Route exact path='/' render={({match, history }) => {
                    return <div className='text inline-block'>
                        
                        <div className='trans_x_center half_w' style={{height: '65%'}} >
                            <div id='MainTitle' className='trans_y_center' >
                                <h1 className='top_heading main glitch'>PITT&nbsp;SOCIAL<sup className='top_heading'>2</sup></h1>
                            </div> 
                            <div id='Login-Hyphen'>
                                <Login className="verticalCenter"/>
                            </div>
                            <Logo src={require('../res/pitt_logo.png')} width='60%'  />  
                        </div>   
                        <div>
                            <div className='LeftPartSecond'>
                                <h3 id='MainTitle' className='main'> Welcome to Pitt Social<sup>2</sup> , aaaa xxxx </h3>
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
                        <div class='table trans_x_center list' style={{width: '70%'}}>
                            <div class='inline_block relative half_w'>
                                <ol class='trans_x_center'>
                                    <li>i</li>
                                    <li>ii</li>
                                    <li>iii</li>
                                    <li>iv</li>
                                </ol>
                            </div>
                            <div class='inline_block relative half_w'> 
                                <ul class='trans_x_center'>
                                    <li>I</li>
                                    <li>II</li>
                                    <li>III</li>
                                    <li>IV</li>
                                </ul>
                            </div>
                        </div>     
                        <div class='trans_x_center inline_block' >
                            <p></p>
                            <p></p> 
                            <p></p> 
                            <p id='bottom_p'>paragraph</p>  
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

                <Route exact path='/HTTP' render={(match, history) => {
                    return <HTTPPage></HTTPPage>
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


