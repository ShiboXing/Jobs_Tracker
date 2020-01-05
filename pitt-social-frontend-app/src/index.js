const React = require('react')
const ReactDOM = require('react-dom')
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
const Sidebar = require('./components').Sidebar
const Login = require('./components').Login
const MainPage = require('./MainPage/index').MainBody
// const http = require('http')
require('./index.css')

//import {Sidebar, Login} from './components'
//import * as serviceWorker from './serviceWorker'
//ServiceWorker deprecated ???

// listReactFiles(__dirname).then(files => console.log(files))

/* violate cross-origin policy */

// var helloOpts= {
//     host: 'localhost',
//     port: 4000,
//     path: '/',
//     method: 'GET',
//     headers: {'content-type':'application/x-www-form-urlencoded'}
// }

// var helloGet= http.request(helloOpts, function(res) {
//     res.setEncoding('utf8')
//     res.on('data', function(d) {
//         alert(d)
//     })
    
// })
// helloGet.on('error', (err) => {
//     console.log('error on GET')
// });

// helloGet.write('')
// helloGet.end()




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
        console.error('Error:', error);
    })
}





// function httpHelloGet(url, path) {
//     let opts = {
//         host: url,
//         port: 4000,
//         path: path,
//         method:'GET',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'Access-Control-Allow-Headers':'Content-Type',
//             'Access-Control-Allow-Methods':'GET',
//             'Access-Control-Allow-Origin':'http://localhost:3000/'
//         }
//     }
//     let req = http.request(opts, function(res) {
//         res.setEncoding('utf8')       
//         console.log('res:',res)

//         res.on('data', function(data) {
//             console.log('data: ',data)
//         })
//     })

//     req.end()
// }
 


class MainBody extends React.Component {
    componentDidMount() {
        helloGet('http://localhost:4000/hello')
        helloGet('http://localhost:4000/profile')
        //httpHelloGet('localhost','/hello')
        //helloGet('http://localhost','/httpHello')
        // .then((data) => {
        //     console.log(data)
        // })
    }

    render() {
        return (
            <Router>

                <Route exact path='/' render={({match, history }) => {
                            return <div className='background'>
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
                                    <Logo src={require('../res/pitt_logo.png')} width='60%'  />  
                                </div>         
                            </div>
                            
                }}/>
                
                <Route exact path='/MainPage' render={(match, history) => {
                    // return <div className='background'>
                    //     <h1 className='top_heading'>
                    //         MainPage is here
                    //     </h1>
                    // </div>
                    return <MainPage></MainPage>
                }}/>
                
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
