import React, { Component } from 'react'
import helpers from './helpers.js'
import Form from './Form.js'

export default class StatPanel extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="jumbotron">
			{/*<Form hoodNames={this.state.hoodNames} />*/}
				<div className="container">
					<div className="row">
						<div className="col-sm-3"><h3>Neighborhood</h3></div>
						<div className="col-sm-3"><h3>2</h3></div>
						<div className="col-sm-3"><h3>3</h3></div>
						<div className="col-sm-3"><h3>4</h3></div>
					</div>
					<div className="row">
						<div className="col-sm-3"><h4>1</h4></div>
						<div className="col-sm-3"><h4>2</h4></div>
						<div className="col-sm-3"><h4>3</h4></div>
						<div className="col-sm-3"><h4>4</h4></div>
					</div>
				</div>
			</div>
			)
	}
}