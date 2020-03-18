const React = require('react')
const Sidebar = require('../components').Sidebar
const Login = require('../components').Login
require('../style_sheets/index.css')
require('../style_sheets/home.css')

class Logo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: props.width,
            height: props.height,
            src: props.src,
            aspectRatio: ''
        }
        
    }
    /*useless -> I don't know how to maintain aspect ratio using padding-top */
    componentDidMount() {
        let img = new Image()
        img.src = this.state.src;
        this.setState({ aspectRatio: ((parseFloat(img.height) / parseFloat(img.width)) * 100) + '%'})
        //console.log(this.state.aspectRatio)
    }

    render() {
        return (
            <div className='logo fillParent flexVerticalCenter show_urself'>
                <div className='absoluteCenter' style={{width: this.state.width, height: this.state.height}} >
                    <img className='grayscale StopRotate' src={this.state.src} alt='' style={{width: '100%'}} />
                </div>
            </div>
        )
    }
}

class MainBody extends React.Component {
    render() {
        return (
            <div className='text inline-block'>
                <div className='trans_x_center half_w' style={{height: '65%'}} >
                    <div id='MainTitle' className='trans_y_center' >
                        <h1 className='top_heading main glitch'>PITT&nbsp;SOCIAL<sup className='top_heading'>2</sup></h1>
                    </div> 
                    <div id='Login-Hyphen'>
                        <Login className="verticalCenter"/>
                    </div>
                    <Logo src={require('../../res/pitt_logo.png')} width='60%'  />  
                </div>   
                <div>
                    <div className='LeftPartSecond'>
                        <h3 id='MainTitle' className='main'> Welcome to Pitt Social<sup>2</sup> , aaaa xxxx </h3>
                        <hr />
                        <h3> aaa xxxx xxxx &nbsp;
                            <abbr title='pitt affiliated person'>PAP</abbr>
                        </h3>
                        <h1 className='top_heading'> mmmmmm </h1>
                        <p> () => return x <br/>
                            (() => console.log(this))()
                        </p>
                    </div>

                    <div className='RightPartFirst'>
                        <Sidebar />
                    </div>
                </div>   
                <div className='table trans_x_center list' style={{width: '70%'}}>
                    <div className='inline_block relative half_w'>
                        <ol className='trans_x_center'>
                            <li>i</li>
                            <li>ii</li>
                            <li>iii</li>
                            <li>iv</li>
                        </ol>
                    </div>
                    <div className='inline_block relative half_w'> 
                        <ul className='trans_x_center'>
                            <li>I</li>
                            <li>II</li>
                            <li>III</li>
                            <li>IV</li>
                        </ul>
                    </div>
                </div>     
                <div className='trans_x_center inline_block' >
                    <p>paragraph</p>
                    <p>paragraph</p> 
                    <p>paragraph</p> 
                    <p id='bottom_p'>
                        paragraph
                        <p>
                            <br/> 
                            anchor inside
                            <p>
                                paragraph inside anchor
                            </p>
                            paragraph
                        </p>
                    </p>  
                </div>
            </div>
        )
    }
}

export {MainBody}

