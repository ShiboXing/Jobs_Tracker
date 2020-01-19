const React = require('react')
const MainSection = require('../components').MainSection
require('../style_sheets/index.css')
require('../style_sheets/mainComponents.css')

class NavItem extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            title: props.title,
            link: props.link
        }
    }

    render() {
        return (
            <a href={this.state.link} className='text NavBarItem' >
                <h5>
                    {this.state.title}
                </h5>
            </a>
        )
    }

}

class NavBar extends React.Component {

    render() {
        return (
            <div id='NavBarContainer'>
                <div id='MainNavBar' className='NavBar'>
                    <div className='navStick'></div>
                    <NavItem title='search people' link='/Search'></NavItem>
                    <NavItem title='posts' link='idk'></NavItem>
                    <NavItem title='friends'></NavItem>
                    <NavItem title='logout'></NavItem>
                </div>
            </div>
        )
    }
}


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

