import React, { Component } from 'react'
import helpers from './utils/helpers.js'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayow: ""
    }
    this.handleClick = this.handleClick.bind(this)
}
  componentDidReceiveProps(){
    console.log("will receive props")
  }
  handleClick(e) {
    console.log('handledClick')
    console.log(e.target.value)
    if(e.target.value === "MON") {
      helpers.monData()
    } else {console.log('not monday')}
    }
  render() {
    if(this.props.hoodName) {
      var hn = this.props.hoodName
      var hoodList = hn.map((nHood) => 
        <option key={nHood}>{nHood}</option>
        )}
    return (
      <div className="header">
      
      <select >
      {hoodList}
      </select>
        <input></input>
        <button className="btn btn-xs" > Lookup </button>
        <button className="btn btn-xs"  type="submit" id="mon" value="MON" onClick={this.handleClick}> Monday  </button>
        <button className="btn btn-xs"  value="TUE" onClick={this.handleClick}> Tuesday  </button>
        <button className="btn btn-xs"  value="WED" onClick={this.handleClick}> Wednesday  </button>
        <button className="btn btn-xs"  value="THU" onClick={this.handleClick}> Thursday  </button>
        <button className="btn btn-xs"  value="FRI" onClick={this.handleClick}> Friday  </button>
        <button className="btn btn-xs"  value="SAT" onClick={this.handleClick}> Saturday  </button>
          
      </div>
    )
  }
}