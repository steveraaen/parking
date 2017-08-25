import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON, LayersControl, Polygon } from 'react-leaflet'
import L from 'leaflet';
import MapContainer from './MapContainer.js'
import MapContainerJr from './MapContainerJr.js'
import StatPanel from './StatPanel.js'
import helpers from './utils/helpers.js'
import day from './utils/time.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dow: day
        }
        this.handleClick = this.handleClick.bind(this)
        this.fetchSigns = this.fetchSigns.bind(this)
    }

    fetchSigns(userLoc) {
        helpers.getToday(userLoc).then(function(respo) {
            var keyArr = respo.data.map((k_, idx) => {
                return 'k_' + idx
            })
            if (Array.isArray(respo.data)) {
                const muts = [];
                const statArray = respo.data;
                for (let i = 0; i < statArray.length; i++) {
                    muts.push(statArray[i].properties.MUT)
                }
                const mutsum = muts.reduce((count, code) => {
                    count[code] = (count[code] || 0) + 1;
                    return count;
                }, {})
                if (mutsum) {
                    console.log(mutsum)
                    this.setState({
                        mutsum: mutsum
                    })
                }
            }
            this.setState({
                data: respo.data,
                keys: keyArr
            })

        }.bind(this))
    }
    componentWillMount() {
        helpers.getOCData().then(function(res) {
            console.log(res[0].geometry)
            this.setState({
                oCageLat: res[0].geometry.lat,
                oCageLng: res[0].geometry.lng
            })
        }.bind(this))

        navigator.geolocation.getCurrentPosition(function(pos) {
            this.setState({
                userLoc: [pos.coords.latitude, pos.coords.longitude],
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            })

            helpers.getCurrentHood(this.state.userLoc).then(function(response) {
                this.setState({ curHood: response.data })
                this.fetchSigns(this.state.userLoc)
            }.bind(this))
        }.bind(this))
    }
            handleClick(e) {
            e.preventDefault();
            console.log(e.target.value)
            this.fetchSigns([this.state.oCageLat, this.state.oCageLng])
            this.setState({
                userLoc: [this.state.oCageLat, this.state.oCageLng]
            })
            
        }
    render() {
        return (
      <div className="App">
        <div className="navbar">
        <form> 
        
          <button className="btn btn-xs" onClick={this.handleClick} value={[this.state.oCageLat, this.state.oCageLng]}>GO</button>
        </form> 
        </div>
       <MapContainer  data={this.state.data} keys={this.state.keys} curHood={this.state.curHood} allHoods={this.state.allHoods}  featSet={this.state.featSet} lat={this.state.lat} lng={this.state.lng} userLoc={this.state.userLoc}/>
  
        </div>
        );
    }
}
export default App;