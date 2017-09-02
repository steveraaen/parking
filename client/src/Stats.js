import React, { Component } from 'react'

export default class Stats extends Component {
constructor(props) {
	super(props)
}

render()	{
if(this.props.dotColors && this.props.data){
	console.log("hello")
      const timeSummary = this.props.data.reduce((count, code) => {
	      count[code.properties.time] = (count[code.properties.time] || 0) + 1;
	      return count;
	  	}, {})
        var result = Object.keys(timeSummary).map(function(key, idx) {
            return {
                y: timeSummary[key],
                x: String(key)               
            };
        });
        
       var statArray = []
       for(let i = 0; i < result.length; i++) {
       		statArray.push(<div className="row" key={'k_'+[i]}><div className="col-sm-4">{result[i].x}</div><div className="col-sm-4">{result[i].y}</div></div>)
       	
       }
 }

	return (
<div className="container">
	{statArray}
</div>
)
}
}