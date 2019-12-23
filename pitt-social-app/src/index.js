import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Sidebar, Login} from './components'

//import * as serviceWorker from './serviceWorker'
//ServiceWorker deprecated ???

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
                <div className='fixedCenter' >
                    <div id='MainTitle' >
                        <h1 className='top_heading verticalCenter'>PITT&nbsp;SOCIAL<sup className='top_heading'>2</sup></h1>
                    </div>
                    <div id='Login' >
                        <Login className="verticalCenter"/>
                    </div>
                </div>
                <Logo/>                
            </div>
        )
    }    
}

class Logo extends React.Component {
    render() {
        return (
            <div className='fixedCenter'>
                <img src='pitt_logo.png' style={{height:'10vh', width:'10vw'}} alt=''/>
            </div>
        )
    }
   
}

// const path = require("path")
// const fs = require("fs")
// console.log(path)
// console.log(fs)
 
// const directoryPath = __dirname 
 
// fs.readdir(directoryPath, (err, files) => {
//   if (err) {
//     console.log("Error getting directory information.")
//   } else {
//     files.forEach(function(file) {
//       console.log(file)
//     })
//   }
// })

ReactDOM.render(<MainBody />, document.getElementById('root'))


//serviceWorker.unregister()
