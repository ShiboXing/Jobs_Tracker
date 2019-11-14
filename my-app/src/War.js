import React from 'react';
import ReactDOM from 'react-dom';
import './War.css';

class WarClock extends React.Component{
	constructor(props)
	{
		super(props)
		this.state={
			dateNow:new Date(),
			name:'yakuza'
		}
	}
	componentDidMount(){
		this.IntervalID=setInterval(()=> this.tick(),1000)
		console.log(this.IntervalID)
		
	}
	componentWillUnmount(){
		clearInterval(this.IntervalID);
	}
	tick(){	
		this.setState({dateNow:new Date()})
	}
	render(){
		return (
			<div className='WarObject'>
				<h1>
					{this.state.dateNow.toLocaleTimeString()}
				</h1>
			</div>
		);
	}
}

class Nan extends React.Component{
	render(){
		return(
			<h1 className='WarObject verticalCenter'>
				我太<button>南</button>了
			</h1>
		)
	}
}

function WarClockSection(){
	return (
		<div>
			<WarClock></WarClock>
			<WarClock></WarClock>
			<WarClock></WarClock>
		</div>
	)
}



export {Nan}
export default WarClockSection
