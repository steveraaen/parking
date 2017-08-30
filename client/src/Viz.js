import React, { Component } from 'react'
import {RadialChart, Hint} from 'react-vis'

export default class Viz extends Component {
	constructor(props){
	super(props);
this.state = {
    value: false
  }
	}
	componentDidUpdate() {
/*console.log(this.props.data)*/
	}

	render() {
		const {value} = this.state;
if(this.props.data) {
	var onlySix= []
	var allTwelve = this.props.data
	for(let i = 0; i < 6; i++) {
		onlySix.push(allTwelve[i])
	}
/*	console.log(onlySix)*/
		return (			
  <div>
 	<RadialChart
 			className={'donut-chart-example'}					  
		  innerRadius={100}
		  radius={140}
		  data={onlySix}
      onValueMouseOver={v => this.setState({value: v})}
      onSeriesMouseOut={v => this.setState({value: false})}
		  width={400}
		  height={400}>
		  {value && <Hint value={value}/>}
		 </RadialChart>
		  
  </div>
			)
	} else {return (
  <div>Hello</div>
		)
}
	}
}