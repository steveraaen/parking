import React, { Component } from 'react'
import helpers from './utils/helpers.js'
import Form from './Form.js'

export default class StatPanel extends Component {
	constructor(props) {
		super(props);

	}
	componentWillReceiveProps() {

	}
	componentDidUpdate() {


	}
	render() {

		return (
			

				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<p>Neighborhood</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-3"><p>1</p></div>
						<div className="col-xs-3"><p>2</p></div>
						<div className="col-xs-3"><p>3</p></div>
						<div className="col-xs-3"><p>4</p></div>
					</div>
				</div>
			)
	}
}