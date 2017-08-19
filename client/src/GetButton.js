import React, { Component } from 'react'
import helpers from './helpers.js'


export default class GetButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayow: "",
      lng: this.props.lng,
      lat: this.props.lat,
      uloc: [this.props.lat, this.props.lng]
    }
    this.handleClick = this.handleClick.bind(this)
}
componentWillMount() {
}
  handleClick(e) {
    e.preventDefault()

    helpers.test(e.target.value).then(function(res) {
      console.log(res.data)
        if (res !== this.state.data) {
          var textArr = res.data.map((text) => {
            return text.properties.T
            })
          var keyArr = res.data.map((k, idx) => {
            return 'k_' + idx
            })
}
        this.setState({ keys: keyArr,
                        data: res.data,
                        text: textArr
        })
      }.bind(this))      
    }
  render() {

    return (
      <div className="well">      
        <button className="btn btn-xs" type="submit" name="loc" id="loc" onClick={this.handleClick} value={[this.props.lng, this.props.lat]}> Center </button>
      </div>
    )
  }
}