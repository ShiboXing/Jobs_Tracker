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
            <table>
                <tbody>
                    <tr>
                        <td><span >1</span></td>
                        <td><span >1</span></td>
                        <td><span >1</span></td>
                    </tr>  
                    <tr>
                        <td><span >1</span></td>
                        <td><span >1</span></td>
                        <td><span >1</span></td>
                    </tr> 
                    <tr>
                        <td><span >1</span></td>
                        <td><span >1</span></td>
                        <td><span >1</span></td>
                    </tr> 
                </tbody>
            </table>

        );
        
    }
    
   
}



ReactDOM.render(<Board />, document.getElementById('root'));

let foo={
    i:0,
    seq:'',
    a: async function(){ 
        await foof.bind(this)();
        console.log(this.seq);
    },
};
foo.a();

async function foof(){
    //setTimeout(() => {
        console.log(this.i);
    //}, 0);
    for(let i =0;i<5;i++)
    {
        this.i=i;
        console.log("a"+this.i);
        this.seq+=i+" ";
    }
}

if(0.1+0.2===0.3)
    console.log('they are equal');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();


