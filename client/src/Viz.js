import React, { Component } from 'react'
import {RadialChart} from 'react-vis'

export default class Viz extends Component {

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
		  width={600}
		  height={600}
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