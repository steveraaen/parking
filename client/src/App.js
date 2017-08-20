import React, { Component } from 'react';
import CMarkers from './CMarkers.js'
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

    helpers.getHoodNames().then(function(res){
          this.setState({hoodNames: res.data });
    }.bind(this))
// -----------------------------------------------------
    helpers.getAllHoods().then(function(resp) {
     /* console.log(resp.data)*/
          this.setState({
            allHoods: resp.data
        })
    }.bind(this)) 
// ------------------------------------------
    helpers.getOneHood().then(function(response) {
      console.log(response.data.geometry.coordinates[0].length)
      response.data.geometry.coordinates[0].pop();
      console.log(response.data.geometry.coordinates[0].length)

      /*var toGJ = response.data.toGeoJSON()*/
      console.log(response.data)

          this.setState({
            oneHood: response.data,
            latLngList: response.data.geometry.coordinates[0]
          })
          
    }.bind(this)) 
}
componentDidMount() {
  helpers.initAutoGeoData(this.state.uloc).then(function(res) {
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

/*    helpers.initGeoData().then(function(res) {
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
      }.bind(this))*/
}
  render() {
    
    return (
      <div className="App">
       <div>
        <CMarkers data={this.state.data} keys={this.state.keys} latLngList={this.state.latLngList}  uloc={this.state.uloc} positions={this.state.allHoods} />
      </div>
      <div> 
      
      </div>
      </div>
      );
  }
}

export default App;















