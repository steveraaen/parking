import React, { Component } from 'react'

export default class Stats extends Component {

render()	{
	if(this.props.data) {
		console.log(this.props.data)
		var tenSigns = this.props.data
		var labelArray = []
		var angleArray = []
		var colorArray = []
		var keyArray = []
		var finalArray = []
		for(let i = 0; i < tenSigns.length; i++) {
			labelArray.push(tenSigns[i].label)
			angleArray.push(tenSigns[i].angle * 4)
			keyArray.push(`ts_${i}`)
			colorArray.push(tenSigns[i].color)

}
				for(let idx = 0; idx < tenSigns.length; idx++) {
					finalArray.push(<tr style={{backgroundColor: colorArray[idx]}} key={keyArray[idx]}><td>{labelArray[idx]}</td><td>{angleArray[idx]}</td></tr>)
				}
	}
	return (
<table className="table" >
 <thead>
  <tr>
    <td>Best Times</td>
    <td>Estimated Spaces</td> 
  </tr>
 </thead>
	<tbody>
{finalArray}
 </tbody>

</table>)

}

}