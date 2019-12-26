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
                    <ReactButton background='CornflowerBlue' color='white' title='Log on' className='LogonButton'/>
                    <ReactButton background='Olive' color='white' title='Guest log on' className='LogonButton'/> 
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
            className: props.className
        }

    }

    render() {
        return (
            <div style={{
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

export {Sidebar, Login}