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
                <div >
                    <div className='LeftPartSecond'>
                        {/* <h1 className='top_heading'>Pitt Social<sup className='top_heading'>2</sup> </h1> */}
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
                        <Sidebar/>
                    </div>
                </div>
                <div className='BottomPartSecond' style={{border: '5px solid red'}}>
                    <div id='MainTitle' style={{border: '5px solid blue'}}>
                        <h1 className='top_heading'>PITT &nbsp; SOCIAL</h1>
                    </div>
                    <div>
                        <Login/>
                    </div>
                </div>
                
            </div>
        )
    }    
}

ReactDOM.render(<MainBody />, document.getElementById('root'))


//serviceWorker.unregister()
