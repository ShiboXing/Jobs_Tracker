const React = require('react')
const ReactDOM = require('react-dom')
require('../index.css')

class navItem extends React.Component {
    constructor(props) {
        this.state = {
            title: props.title
        }
    }
    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
            </div>
        )
    }

}

class navBar extends React.Component {
    render() {
        return (
            <div>
                <navItem title='search'></navItem>
                <navItem title='posts'></navItem>
                <navItem title='friends'></navItem>
                <navItem title='logout'></navItem>
            </div>
        )
    }
}

class MainBody extends React.Component {
    render() {
        return (
            <navBar/>
        )
    }
}

ReactDOM.render(<MainBody />, document.getElementById('root'))

