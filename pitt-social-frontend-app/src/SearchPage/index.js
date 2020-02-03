import '../style_sheets/index.css'
import '../style_sheets/mainComponents.css'
import '../style_sheets/searchComponents.css'
import { NavBar } from '../components'

const React = require('react')

class MainBody extends React.Component {
    render() {
        return (
            <div className='text span_all absolute inline-block'>
                <NavBar></NavBar>
                <SearchObject></SearchObject>
            </div>
        )
    }
}

class SearchObject extends React.Component { 

    constructor(props) {
        super(props)

        let activateDraw = node => {
            let ctx = node.getContext('2d')
            ctx.arc(30, 30, 30, 0, 2 * Math.PI)
            ctx.strokeStyle = 'white'
            ctx.stroke()
            
        }

        this.activateCanvas = <canvas className='absolute' ref={e => activateDraw(e)}></canvas>
        
    }

    render() {
        return (
            <div className='absoluteCenter left30'>
                <h1 className='top_heading '> Search for friends </h1>
                <div style={{height:'auto'}}>
                    {this.activateCanvas}
                    <input id='search_bar' style={{margin: '10px 0px 10px 0px'}} type="text" placeholder="enter username or name"/>
                </div>
            </div>
        )
    }

    componentDidMount() {

    }
}




export {MainBody}
