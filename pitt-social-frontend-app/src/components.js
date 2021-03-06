import React from 'react'
import './style_sheets/index.css'
import './style_sheets/loginComponents.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'

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
            <a href={this.state.link} className='text NavBarItem'>
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
                    <NavItem title='posts' link='MainPage'></NavItem>
                    <NavItem title='HTTP Demo' link='HTTP'></NavItem>
                    <NavItem title='logout'></NavItem>
                </div>
            </div>
        )
    }
}


class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className='top_heading'>Actions:</h1>
                </div>
                <ul>
                    <SidebarItem title='manage friend'></SidebarItem>
                    <SidebarItem title='manage group'></SidebarItem>
                    <SidebarItem title='send message'></SidebarItem>
                    <SidebarItem title='create group'></SidebarItem>
                    <SidebarItem title='search'></SidebarItem>
                </ul>
            </div>
        )
    }
}

class SidebarItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {title: props.title}
    }
    render() {
        return (
            <div className='MenuItem' >
                <h3>{this.state.title}</h3>
            </div>
        )
    }
}

class Login extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {className: props.className}
    }
    render() {
        return (
            <div className={this.state.className}>
                <InputItem title='username'></InputItem>
                <InputItem title='password'></InputItem>
                <div style={{'marginTop':'3vh'}}>
                    <Router>
                        <ReactButton background='CornflowerBlue' color='white' title='Log on' className='LogonButton' />
                        <Route path='/'  render={({match, history }) => {
                            return <ReactButton background='Olive' color='white' title='Guest log on' className='LogonButton' 
                                onClick={() => { 
                                    // history.push('/MainPage')
                                    location.pathname='/MainPage'
                                }}/>
                        }}/>
                        <ReactButton background='crimson' color='white' title='Register' className='LogonButton' 
                            onClick={() => {
                                location.pathname='/Register'
                            }}/>
                        
                    </Router>  
                </div>       
            </div>
        )
    }
    
}

class InputItem extends React.Component {

    render() {
        return (
            <div className='InputItem'  >
                <h3 className='InputTitle text'>{this.props.title}</h3>
                <input id={this.props.id} name={this.props.name} type={this.props.type} ref='_value'></input>
            </div>
        )
    }

    ff() {
        this.console.log('ff')
    }
}

class ReactButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            background: props.background,
            color: props.color,
            title: props.title,
            className: props.className,
            onClick: props.onClick
        }

    }

    render() {
        return (
            <div onClick={this.state.onClick} 
                style={{
                    color: this.state.color, 
                    background: this.state.background,
                    'paddingBottom': '0.5vh',
                    'margin': '1vh'
                }} className={this.state.className}>
                <h5>{this.state.title}</h5>
            </div>
        )
    }
}


class MainSection extends React.Component {

    render() {
        return (
            <div className='bg_dk x_75_page y_75_page small_margin small_cor_rad' > 
                <h2 className='absoluteCenter'>Wotai-Nanle Inc. </h2>
            </div>
        )
    }
}

export {Sidebar, Login, MainSection, NavBar, InputItem}