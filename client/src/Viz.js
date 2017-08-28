import React, { Component } from 'react'
import {RadialChart} from 'react-vis'

export default class Viz extends Component {
	constructor(props){
	super(props);

	}
	componentDidUpdate() {
console.log(this.props.data)
	}

	render() {
if(this.props.data) {
		return (			
  <div>
 	<RadialChart			
		  data={this.props.data}
		  colorType="literal"
		  innerRadius={60}
		  width={400}
		  height={300}
		  showLabels={true}
		   />
		  
  </div>
			)
	} else {return (
  <div>Hello</div>
		)
}
	}
}