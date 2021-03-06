import '../style_sheets/index.css'
import '../style_sheets/mainComponents.css'
import '../style_sheets/searchComponents.css'
import { NavBar } from '../components'
import { Circle } from '../shapes/blob'
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

            this.ctx = node.getContext('2d')
            // this.ctx.arc(blob.x, blob.y, blob.radius, blob.start_deg, blob.end_deg)
            //this.updateCanvas()

            let circle = new Circle(80, 80, 50, this.ctx)
            circle.make_circle()
            circle.tremble()
        } 

        this.activateCanvas = <canvas className='absolute' ref={e => activateDraw(e)}></canvas>
        
    }


    render() {
        return (
            <div className='absoluteCenter left30'>
                <h1 className='top_heading '> Search for friends </h1>
                <div style={{height:'auto'}}>
                    {this.activateCanvas}
                    <input id='search_bar' style={{margin: '10px 0px 10px 0px', visibility: 'hidden'}} type="text" placeholder="enter username or name"/>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.blob)
    }
}


fetch('http://localhost:4000/profile', {
    method: 'GET',
    mode:'cors',
    header: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}).then((result) => { //result -> response stream
    return result.json(); //returns a Promise, see json() API
}).then((result) => { // must use then to have the Promise resolved, otherwise pending
    console.log(result);
}).catch((error) => {
    console.error('Hello Get Error:', error);
}); // catches all the errors from above Promise resolution

export {MainBody}
