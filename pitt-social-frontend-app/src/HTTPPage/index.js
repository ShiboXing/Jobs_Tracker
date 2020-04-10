const React = require('react');
const PropTypes = require('prop-types');
require('../style_sheets/httpPage.css');
const Component = require('react');
import $ from 'jquery';


class Mainbody extends React.Component {

    componentWillMount() {
        this.tableRef = React.createRef();
        this.RefPrint = (e) => console.log(e);
        this.upTitle = 'down';
        this.setState({downTitle: 'up'});
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
                                    <Etch_A ref='first_pad' title='trackpad' isTrack={true}></Etch_A>
                                </td> 
                            </tr>
                            <tr> 
                                <td ref='_td_ref2' >
                                    <div className='half_grid span_w span_h'>
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
                           {this.upTitle}
                        </div>
                    </div>
                    <div style={{height: '6em'}} className='show_urself'>
                        <div style={{position:'absolute', width: '50%', height: '30%', 
                        margin:'auto', top:'35%'}}>
                            {this.state.downTitle}
                        </div>
                    </div>
                    <a href='http://google.com'> LOOK AT ME</a>
                    <a href='http://google.com'> LOOK AT ME</a>
                    <a href='http://google.com'> LOOK AT ME</a>
                    <div>123123123</div>
                </div>
            </div>
            
        )
    }
    componentDidMount() {
        setInterval(() => {
            this.upTitle += '+';
            this.setState({downTitle: this.state.downTitle + '+'})   
        }, 1000);
    }
}



class Etch_A extends React.Component {

    constructor(props) {
        super(props);

        let fetchCtx = (function(e) {
            this.padCtx = e.getContext('2d');
            this.padCtx.beginPath();
        }).bind(this);
        this.state = {};
        // assign state directly before component is mounted
        var sts = {
            clickTimes: 0,
            canDrag: false,
            dragLeft: 0, 
            dragTop: 0
        };
        for (var prop in sts) this.state[prop] = sts[prop];

        var sts = {
            Pad: <canvas ref={fetchCtx} className='span_w span_h' style={{background: 'DimGray'}} onMouseDown={() => {
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
                    }} onMouseMove={this.updateDrawPad.bind(this)} 
                    onClick={this.updateNumberSpan.bind(this)} >
                </canvas>,
            dragPad: <div id='dragbox' className='inline_block absolute' style={{left:0}}
                ref = {e => {this.dragPadDom = e;}}
                onMouseDown={e => { this.setState({canDrag: true}); }}
                
            ></div>
        };
        for (prop in sts) this.state[prop] = sts[prop];
        

    }
    
    static propTypes = {
        title: PropTypes.string
    }
    
    static defaultProps = {
        title: '[etch_a_sketch]'
    }

    updateDrawPad(e) {
        var ctx = this.padCtx;
    }

    updateNumberSpan(e) {
        this.setState({
            clickTimes: this.state.clickTimes + 1
        });
    }

    componentDidMount() {
        console.log(this.state.dragPad);
    }



    render() {
        return (
            <div id='etch_a' onClick={this.props.etch_clicked} 
                style={{height: '40vh', width: '80%', overflow: 'hidden'}} 
                className='trans_x_center round_corn'
                onMouseMove={e => { 
                    if (this.state.canDrag) {
                        console.log(e.nativeEvent.offsetX);
                        this.dragPadDom.style.left = e.nativeEvent.offsetX + 'px';
                    }
                }} >
                <div className='span_w' style={{background:'green', zIndex: -1}}> 
                    <span ref='_span' className='inline_block' style={{textAlign:'center', width: 'inherit'}}>
                        {this.props.title} 
                    </span>
                </div>
                {this.state.Pad}
                {this.state.dragPad}
               <span className='absolute trans_x_center span_w' color='white'>{this.state.clickTimes}</span>
            </div>
        )
    }

}


export {Mainbody}