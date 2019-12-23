import React from 'react'
import './index.css'
import './components.css'

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
            <div className='MenuItem'>
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
            <div style={{border: '5px solid yellow'}} className={this.state.className}>
                <InputItem title='username'></InputItem>
                <InputItem title='password'></InputItem>
                <div className='LogonButton'>
                    <h3>Log on</h3>
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

export {Sidebar, Login}