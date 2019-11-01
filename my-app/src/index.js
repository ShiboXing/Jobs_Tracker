import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class ShoppingList extends React.Component{
    render() {
        return(
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

class Board extends React.Component{
    renderSquare(i){
        return <Square value={i} />;
    
    }
    render(){
        return this.renderSquare(9);
    }
}

class Square extends React.Component{
    render() {
        return(
            <button className="sqaure">
                {this.props.value}
            </button>
        );
    }
}


ReactDOM.render(<Board />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();


