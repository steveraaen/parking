import React, { Component } from 'react'

export default class Timeline extends Component {

render()	{
	    var pieColors= ["#7f9999","#7f7fb2","#cc7f7f","#B2997F","#d6ffff","#b2b2ef", "#7f9999","#7f7fb2","#cc7f7f","#B2997F","#d6ffff","#b2b2ef", "#7f9999","#7f7fb2","#cc7f7f","#B2997F","#d6ffff","#b2b2ef"]


	return (
		<div className="well">
			<code>LatLng  :</code>{this.props.userLoc}
			<code>GPS accuracy  : -</code>{this.props.accuracy}
		</div>
		)

}

}