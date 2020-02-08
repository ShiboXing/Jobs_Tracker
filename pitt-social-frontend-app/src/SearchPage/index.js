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
            let blob = {
                x: 30,
                y: 30,
                radius: 30,
                start_deg: 0,
                end_deg: 2 * Math.PI
            }

            this.blob = blob

            this.ctx = node.getContext('2d')
            // this.ctx.arc(blob.x, blob.y, blob.radius, blob.start_deg, blob.end_deg)
            //this.updateCanvas()

            let circle = new Circle(80, 80, 50, this.ctx)
            circle.make_circle()
            circle.tremble()
        } 

        this.updateCanvas = () => {
            
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






export {MainBody}
