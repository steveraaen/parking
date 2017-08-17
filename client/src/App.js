import React, { Component } from 'react';
import GeoJSON from './CMarkers.js'
import GetButton from './GetButton.js'
import helpers from './helpers.js'
import day from './time.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoodNames: null,
      uloc: null,
      lat: "",
      lng: "",
      dow: day
    }
  
  }
  componentWillMount(){

   navigator.geolocation.watchPosition(function(pos){
    console.log(navigator)
    var userLoc = []
    userLoc.push(pos.coords.latitude)
    userLoc.push(pos.coords.longitude)
    this.setState({ lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                    uloc: [pos.coords.longitude, pos.coords.latitude]
    })
        }.bind(this))
  }

  componentDidMount() {
helpers.getHoodNames().then(function(res){
          this.setState({hoodNames: res.data });
}.bind(this))
// -----------------------------------------------------

    helpers.initGeoData().then(function(res) {
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
      <div className="App">
       <div className="header">
{/*        <Form hoodName={this.state.hoodNames}  />*/}
        <GetButton  lat={this.state.lat} lng={this.state.lng} />
       </div>
        <GeoJSON data={this.state.data} keys={this.state.keys} text={this.state.text} hoodName={this.state.hoodName} latlngs={this.state.latlngs}/>
      </div>
    );
  }
}

export default App;















