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

        var activateCanvas = <canvas></canvas>
        console.log(activateCanvas)
        var activateDraw = () => {
            let ctx = activateCanvas.getContext('2d')
            //draw stuff
        }

        //activateDraw()

        this.state = {
            activate: activateCanvas
        }
    }

    render() {
        return (
            <div className='absoluteCenter left30'>
                <h1 className='top_heading '> Search for friends </h1>
                <input id='search_bar' style={{margin: '10px 0px 10px 0px'}} type="text" placeholder="enter username or name"/>
                {this.state.activate}
            </div>
        )
    }

    componentDidMount() {

    }
}




export {MainBody}
