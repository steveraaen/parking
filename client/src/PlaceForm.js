import React, { Component } from 'react'

export default class PlaceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {place: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({place: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault(); 
    this.props.getOCData(this.state.place);
    console.log(this.state.place)
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
          <input className="placeInput" type="text" value={this.state.place} onChange={this.handleChange} placeholder="Enter a place (e.g., Beacon Theater) or an address in NYC" />
        <input type="submit" />
      </form>

    );
  }
}

