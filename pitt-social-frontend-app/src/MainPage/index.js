const React = require('react')
const MainSection = require('../components').MainSection
const NavBar = require('../components').NavBar
require('../style_sheets/index.css')
require('../style_sheets/mainComponents.css')



class MainSectionContainer extends React.Component {
    render() {
        return (
            <div id='MainContainer' className='absolute span_x'>
                <MainSectionScroll>
                    <MainSection></MainSection>
                    <MainSection></MainSection>
                    <MainSection></MainSection>
                    <MainSection></MainSection>
                    <MainSection></MainSection>
                    <MainSection></MainSection>
                </MainSectionScroll>
            </div>
        )
    }
}

class MainSectionScroll extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            sections: props.sections,
            
        }
    }

    componentDidMount() {
        //this.props.children = this.state.sections
    }

    render() {
        return (
            <div className='text absolute x_trans_center'>
                    {this.props.children}
            </div>
        )
    }
}


class MainBody extends React.Component {
    render() {
        return (
            <div className='span_all'>
                <NavBar></NavBar>
                <MainSectionContainer></MainSectionContainer>
            </div>
            
        )
    }
}

export {MainBody}
// ReactDOM.render(<MainBody />, document.getElementById('root'))

