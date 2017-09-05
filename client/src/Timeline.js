import React, { Component } from 'react'

export default class Timeline extends Component {

render()	{


	return (
		<div className="well">
			<code>LatLng  :</code>{this.props.userLoc}
			<code>GPS accuracy  : -</code>{this.props.accuracy}
		</div>
		)

}

}