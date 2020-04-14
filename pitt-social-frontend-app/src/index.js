import {BrowserRouter as Router, Route} from 'react-router-dom'
const React = require('react')
const ReactDOM = require('react-dom')
const MainPage = require('./MainPage/index').MainBody
const SearchPage = require('./SearchPage/index').MainBody
const RegisterPage = require('./RegisterPage/index').MainBody
const HTTPPage = require('./HTTPPage/index').Mainbody
const LandingPage = require('./LandingPage/index').MainBody



class MainBody extends React.Component {

    render() {
        return (
            <Router>
                <link href='https://fonts.googleapis.com/css?family=Alata|Wallpoet&display=swap' rel='stylesheet'/>
                <Route exact path='/' render={(match, history) => {
                    return <LandingPage></LandingPage>
                }}/>
                
                <Route exact path='/MainPage' render={(match, history) => {
                    return <MainPage></MainPage>
                }}/>

                <Route exact path='/Search' render={(match, history) => {
                    return  <SearchPage></SearchPage>
                }}/>
                
                <Route exact path='/Register' render={(match, history) => {
                    return <RegisterPage></RegisterPage>
                }}></Route>

                <Route exact path='/HTTP' render={(match, history) => {
                    return <HTTPPage></HTTPPage>
                }}></Route>

            </Router>
        )
    }    
}




ReactDOM.render(<MainBody />, document.getElementById('root'))


