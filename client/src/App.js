import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON, LayersControl, Polygon } from 'react-leaflet'
import L from 'leaflet';
import MapContainer from './MapContainer.js'
import Form from './Form.js'
import GetButton from './GetButton.js'
import StatPanel from './StatPanel.js'
import helpers from './helpers.js'
import day from './time.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dow: day
        }
    }
    componentWillMount() {
      helpers.getAllHoods().then(function(resp) {
            this.setState({allHoods: resp.data})
}.bind(this))
      navigator.geolocation.getCurrentPosition(function(pos) {
            this.setState({ userLoc: [pos.coords.latitude, pos.coords.longitude],
                            lat: pos.coords.latitude,
                            lng: pos.coords.longitude
                          })

          helpers.getCurrentHood(this.state.userLoc).then(function(response) {
                this.setState({curHood: response.data})

                helpers.getToday(this.state.userLoc).then(function(respo)  {
                  var keyArr = respo.data.map((k_, idx) => {
                    return 'k_' + idx
                  })
                this.setState({data: respo.data,
                               keys: keyArr
                              })
}.bind(this))       
}.bind(this)) 
}.bind(this))
    }


    render() {
      var zoom = 13;
      var center = [40.656645, -73.963907];

        return (
      <div className="App">
          <StatPanel data={this.state.data} lat={this.state.lat} lng={this.state.lng}/>
            <MapContainer data={this.state.data} keys={this.state.keys} curHood={this.state.curHood} allHoods={this.state.allHoods}  lat={this.state.lat} lng={this.state.lng} userLoc={this.state.userLoc}  />
      </div>
        );
    }
}
export default App;