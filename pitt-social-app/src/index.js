import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Sidebar from './Components'

//import * as serviceWorker from './serviceWorker'
//ServiceWorker deprecated ???

class MainBody extends React.Component {
    render() {
        return (
            <div>
                <link href='https://fonts.googleapis.com/css?family=Alata|Wallpoet&display=swap' rel='stylesheet'/> 
                <div style={{border: '5px solid blue'}}>
                    <div className='LeftPartSecond'>
                        <h1 className='top_heading'>Pitt Social<sup className='top_heading'>2</sup> </h1>
                        <p> Welcome to Pitt Social<sup>2</sup> , a platform for pitt affiliated people to social </p>
                        <hr />
                        <p> feel free to social, if you are a &nbsp;
                            <abbr title='pitt affiliated person'>PAP</abbr>
                        </p>
                        <h2> How to social </h2>
                        <p> Add friends, add groups -> Send messages <br/>
                            You come, you see -> you conquer
                        </p>
                    </div>
                    <div className='RightPartFirst'>
                        <Sidebar></Sidebar>
                    </div>
                </div>
            </div>
        )
    }    
}

ReactDOM.render(<MainBody />, document.getElementById('root'))


//serviceWorker.unregister()
