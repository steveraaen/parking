import React, { Component } from 'react'

export default class PlaceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
   
    this.props.getOCData(this.state.searchTerm);
    console.log(event)
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
          <input className="placeInput" type="text" value={this.state.searchTerm} onChange={this.handleChange} placeholder="Enter a place (Beacon Theater) or an address in NYC" />
        <input type="submit" />
      </form>

    );
  }
}

