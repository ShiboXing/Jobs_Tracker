import React from 'react';
import ReactDOM from 'react-dom';
import './WarClock.css';

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
	}
	componentWillUnmount(){
		clearInterval(this.IntervalID);
	}
	tick(){	
		this.setState({dateNow:new Date()})
	}
	render(){
		return (
			<div id='WarClock' className='WarClock'>
				<h1 id="TimeString">
					{this.state.dateNow.toLocaleTimeString()}
				</h1>
			</div>
		);
	}
}

export default WarClock

