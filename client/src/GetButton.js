import React, { Component } from 'react'
import helpers from './helpers.js'

export default class GetButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayow: "",
      uloc: [this.props.lat, this.props.lng]

    }
    this.handleClick = this.handleClick.bind(this)
}
componentWillMount() {

}
  handleClick(e) {
    e.preventDefault()

     helpers.test(e.target.value)
      console.log(e.target.value)
      
    }
  render() {

    return (
      <div className="header">
      
        <button className="btn btn-xs" type="submit" name="loc" id="loc" onClick={this.handleClick} value={[this.props.lng, this.props.lat]}> Center </button>
      </div>
    )
  }
}