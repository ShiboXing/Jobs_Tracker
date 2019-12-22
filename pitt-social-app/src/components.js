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
    
    render() {
        return (
            <div>
                <InputItem title='username'></InputItem>
                <InputItem title='password'></InputItem>
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
            <div>
                <h3>{this.state.title}</h3>
            </div>
        )
    }
}

export {Sidebar, Login}