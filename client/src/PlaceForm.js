import React, { Component } from 'react'
import axios from 'axios'
import pwds from './utils/passwds.js'

 export default class PlaceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {place: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
      getOCData(place) {
       if(this.state.place){
        place = this.state.place
        console.log(place)

        var queryURL = "https://api.opencagedata.com/geocode/v1/json?query=" + place  + " NYC&pretty=1&key=" + pwds.ocage;               
        console.log(queryURL)
        return axios.get(queryURL).then(function(response) {
            if (response.data.results) {
              console.log(response)
              this.props.setPlaceLoc([response.data.results[0].geometry.lat, response.data.results[0].geometry.lng])
              this.setState({
                OClat: response.data.results[0].geometry.lat,
                OClng: response.data.results[0].geometry.lng,
                placeLoc: [response.data.results[0].geometry.lat, response.data.results[0].geometry.lng]                
              }) 
 
            } else {
                console.log("Does not have data")
                return "";
            }
            this.props.setPlaceLoc(this.state.placeLoc)
            this.props.fetchSigns(this.state.placeLoc)
        }.bind(this));
        }
    }
  handleChange(event) {
    this.setState({place: event.target.value});
  }
  handleClick() { 
  this.getOCData()

     
  }
  render() {
    return (
        <div >
          <input className="placeInput" name="place" type="text" value={this.state.place} onChange={this.handleChange} placeholder="e.g., 'Beacon Theater', or an address in NYC"></input>
         <br/>
         <input type="button" className="btn btn-xs btn-primary" onClick={this.handleClick} value={"Find Place"} />
        </div>

    );
  }
}

