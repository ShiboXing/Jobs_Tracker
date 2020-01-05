const React = require('react')
const ReactDOM = require('react-dom')
require('../index.css')

// class navItem extends React.Component {
//     constructor(props) {
//         super(props) 
//         this.state = {
//             title: props.title
//         }
//     }
//     componentDidMount() {
       
//     }
//     render() {
//         return (
//             <div>
//                 <h3>{this.state.title}</h3>
//             </div>
//         )
//     }

// }

// class navBar extends React.Component {
//     render() {
//         return (
//             <div>
//                 <navItem title='search'></navItem>
//                 <navItem title='posts'></navItem>
//                 <navItem title='friends'></navItem>
//                 <navItem title='logout'></navItem>
//             </div>
//         )
//     }
// }

class MainBody extends React.Component {
    componentDidMount() {
        console.log('MainPage did mount')
    }
    render() {
        return (
            <div className='background'>
                <link href='https://fonts.googleapis.com/css?family=Alata|Wallpoet&display=swap' rel='stylesheet'/> 
                <h1 className='glitch top_heading verticalCenter'> this is Main Page</h1>
            </div>
        )
    }
}

export {MainBody}
// ReactDOM.render(<MainBody />, document.getElementById('root'))

