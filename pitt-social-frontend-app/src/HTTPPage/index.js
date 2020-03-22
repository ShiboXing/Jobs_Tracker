const React = require('react');
const PropTypes = require('prop-types');
require('../style_sheets/httpPage.css');
const Component = require('react');

class Mainbody extends React.Component {

    componentWillMount() {
        this.tableRef = React.createRef();
        this.RefPrint = (e) => console.log(e);
    }

  

    render() {
        return (
            <div>
                <h3>http demo </h3>
                <div id='Etch_Container' style={{width: '70vw', height: '80vh'}} className='trans_x_center' >
                    <table className='span_w span_h' style={{borderSpacing: '0px 10px', borderCollapse: 'separate'}} ref={this.tableRef} >
                        <tbody>
                            <tr>
                                <td ref='_td_ref1'>
                                    <Etch_A title='trackpad' isTrack={true}></Etch_A>
                                </td> 
                            </tr>
                            <tr> 
                                <td ref='_td_ref2' >
                                    <div className='half_grid span_w span_h'  >
                                        <div className='inline_block' style={{gridArea: 'blk1', width: '50%'}}>
                                            <Etch_A title='socket.io'></Etch_A>
                                        </div>
                                        <div className='inline_block' style={{gridArea: 'blk2', width: '50%'}}>
                                            <Etch_A title='s'></Etch_A>
                                        </div>
                                    </div>
                                </td> 
                            </tr>
                        </tbody>
                    </table>
                    <div style={{height: '6em'}} className='show_urself'>
                        <div style={{position:'absolute', width: '50%', height: '30%', 
                        margin:'auto', top:'35%'}}>
                            blablablabla egn4ign4igni4ngi4ng
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.tableRef.current);
    }
}



class Etch_A extends React.Component {

    constructor(props) {
        super(props);

        let updateXY = (function(e) {
            if (this.state.MouseIsDown && this.props.isTrack) {
                this.state.buffer.unshift([e.clientX, e.clientY]);
                this.state.buffer.pop();
                // console.log(this.state.buffer);
                // this.state.Pad.
            }
        }).bind(this);

        // assign state directly before component is mounted
        this.state = ({
            Pad: <canvas className='span_w span_h' style={{background: 'DimGray'}} onMouseDown={() => {
                        this.setState({
                            MouseIsDown: true
                        });
                    }} onMouseLeave={() => {
                        this.setState({
                            MouseIsDown: false,
                        })
                    }} onMouseUp={() => {
                        this.setState({
                            MouseIsDown: false
                        })
                    }} onMouseMove={updateXY}>
                </canvas>,
            buffer: [...Array(50)]
        });
    }
    
    static propTypes = {
        title: PropTypes.string
    }
    
    static defaultProps = {
        title: '[etch_a_sketch]'
    }

    render() {
        return (
            <div id='etch_a' onClick={this.props.etch_clicked} 
                style={{height: '40vh', width: '80%', overflow: 'hidden'}} 
                className='trans_x_center round_corn' >
                <div className='span_w' style={{background:'green', zIndex: -1}}>
                    <span className='inline_block' style={{textAlign:'center', width: 'inherit'}}>
                        {this.props.title} 
                    </span>
                </div>
                {this.state.Pad}
            </div>
        )
    }

    componentDidMount() {
        
        // if (!this.props.isTrack) {
        //     this.setState({
        //         Pad: <canvas></canvas>
        //     });
        // }
    }
}


export {Mainbody}