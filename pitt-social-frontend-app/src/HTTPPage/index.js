const React = require('react');
const PropTypes = require('prop-types');
require('../style_sheets/httpPage.css');
const Component = require('react');

class Mainbody extends React.Component {

    componentWillMount() {
        this.tableRef = React.createRef();
        this.RefPrint = (e) => console.log(e);
    }

    addClick(e) {
        console.log('Etch_A Clicked 0 times');
        document.getElementsByTagName('h3')[0].innerText.mat
        document.getElementsByTagName('h3')[0].innerText.replace(/\d+/, )
    }

    render() {
        return (
            <div>
                <h3>http demo </h3>
                <div id='Etch_Container' style={{width: '70vw', height: '80vh'}} className='trans_x_center' >
                    <table className='span_w span_h' style={{'border-spacing': '0px 10px', borderCollapse: 'separate'}} ref={this.tableRef} >
                        <tbody>
                            <tr>
                                <td ref='_td_ref1'>
                                    <Etch_A title='trackpad' etch_clicked={this.addClick}></Etch_A>
                                </td> 
                            </tr>
                            <tr> 
                                <td ref='_td_ref2' >
                                    <div style={{display:'grid', gridGap: '10px'}} class='half_grid span_w span_h'>
                                        <div className='inline-block span_x span_y' style={{gridArea: 'blk1'}}>
                                            <Etch_A title='socket.io' etch_clicked={this.addClick}></Etch_A>
                                        </div>
                                        <div className='inline-block span_x span_y' style={{gridArea: 'blk2'}}>
                                            <Etch_A title='Https' etch_clicked={this.addClick}></Etch_A>
                                        </div>
                                    </div>
                                </td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.tableRef.current);
    }
}



class Etch_A extends React.Component {
    
    static propTypes = {
        title: PropTypes.string
    }
    
    static defaultProps = {
        title: '[etch_a_sketch]'
    }

    render() {
        return (
            <div id='etch_a' onClick={this.props.etch_clicked} 
                style={{height: '100%', width: '80%', overflow: 'hidden'}} 
                className='trans_x_center round_corn' >
                
                <div className='span_w' style={{background:'green', zIndex: -1}}>
                    <span className='inline_block' style={{textAlign:'center', width: 'inherit'}}>
                        {this.props.title}
                    </span>
                </div>
            </div>
        )
    }
}


export {Mainbody}
