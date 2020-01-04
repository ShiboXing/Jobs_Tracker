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
		//console.log(this.IntervalID)
		
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
	constructor(props){
		super(props);
		this.state={
			handleClick:function(domId, e){
				e.preventDefault()  //click won't open a new page
				console.log('Nan '+domId)

			}
		}
	}
	
	addNan(e){
		
	}
	render(){
		return(
			<h1 className='WarObject verticalCenter'>
				我太
				<button id='nan_button' onClick={buttonBlink}>南</button>
				<a id='NanLink' href='https://baidu.com' onClick={this.state.handleClick.bind(this,'NanLink')}>南</a>
				了
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


function buttonBlink(){
	
}



export {Nan}
export default WarClockSection
