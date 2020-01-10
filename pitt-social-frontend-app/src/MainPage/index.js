const React = require('react')
const ReactDOM = require('react-dom')
require('../style_sheets/index.css')
require('../style_sheets/mainComponents.css')

class NavItem extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            title: props.title
        }
    }

    render() {
        return (
            <a href='#' className='text NavBarItem' >{this.state.title}</a>
        )
    }

}

class NavBar extends React.Component {

    
    render() {
        return (
            <div className='NavBar'>
                <div className='navStick'></div>
                <NavItem title='search people'></NavItem>
                <NavItem title='posts'></NavItem>
                <NavItem title='friends'></NavItem>
                <NavItem title='logout'></NavItem>
            </div>
        )
    }
}

class MainBody extends React.Component {
    render() {
        return (
            <NavBar ></NavBar>
        )
    }
}

export {MainBody}
// ReactDOM.render(<MainBody />, document.getElementById('root'))

