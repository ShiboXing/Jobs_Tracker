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

        var activateDraw = node => {
            console.log('wuyan')
            let ctx = node.getContext('2d')
            //draw stuff
        }

        let activateCanvas = <canvas ref={e => activateDraw(e)}></canvas>
        this.activateCanvas = activateCanvas
    }

    render() {
        return (
            <div className='absoluteCenter left30'>
                {this.activateCanvas}
                <h1 className='top_heading '> Search for friends </h1>
                <input id='search_bar' style={{margin: '10px 0px 10px 0px'}} type="text" placeholder="enter username or name"/>
                
            </div>
        )
    }

    componentDidMount() {

    }
}




export {MainBody}
