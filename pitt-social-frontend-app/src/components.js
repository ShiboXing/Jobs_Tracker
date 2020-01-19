import React from 'react'
import './style_sheets/index.css'
import './style_sheets/loginComponents.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


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
                    </Router>  
                </div>       
            </div>
        )
    }
    
}

class InputItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {title: props.title}
    }

    render() {
        return (
            <div  className='InputItem' >
                <h3 className='InputTitle'>{this.state.title}</h3>
                <input type='text'></input>
            </div>
        )
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

export {Sidebar, Login, MainSection}