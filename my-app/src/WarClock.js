import React from 'react';
import ReactDOM from 'react-dom';

class WarClock extends React.Component{
	render(){
		tick.bind(this)();
		return (
			<div id='WarClock'>
				<this.renderTime/>
			</div>
		);
	}
	renderTime(){
		return(
			<h1 id="TimeString">
				{new Date().toLocaleTimeString()}
			</h1>
		);
	}
}

function tick(){
	setInterval(() => {
		ReactDOM.render(this.renderTime(),document.getElementById('WarClock'))
	}, 1000);
}







export default WarClock;

