import React, { Component } from 'react';
import axios from 'axios'
import MapContainer from './MapContainer.js'
import PlaceForm from './PlaceForm.js'
import Viz from './Viz.js'
import helpers from './utils/helpers.js'
import pwds from './utils/passwds.js'
import day from './utils/time.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dow: day,
            place: "Beacon Theater, NYC"
        }
        this.fetchSigns = this.fetchSigns.bind(this)
        this.getOCData = this.getOCData.bind(this)
    }
    getOCData(place) {
       place = this.state.place
        var queryURL = "https://api.opencagedata.com/geocode/v1/json?query=" + place + "&pretty=1&key=" + pwds.ocage;
               
        return axios.get(queryURL).then(function(response) {
            if (response.data.results) {
              this.setState({
                OClat: response.data.results[0].geometry.lat,
                OClng: response.data.results[1].geometry.lng                
              })

                return response.data.results;
            } else {
                console.log("Does not have data")
                return "";
            }
        }.bind(this));
    }
    fetchSigns(placeLoc) {
    var pieColors= ["blue", "pink", "yellow", "red", "orange", "white"]
     placeLoc = [this.state.OClat, this.state.OClng]

      this.setState({placeLoc: placeLoc})

        helpers.getToday(placeLoc).then(function(respo) {
          console.log(respo)
            var keyArr = respo.data.map((k_, idx) => {
                return 'k_' + idx
            })
            if (Array.isArray(respo.data)) {
                const muts = [];
                const statArray = respo.data;
                for (let i = 0; i < statArray.length; i++) {
                    var mut = statArray[i].properties.MUT
                    var t = statArray[i].properties.T
                    muts.push(t)
                }
                
                var counts = {};
                  for (var i = 0; i < muts.length; i++) {
                      counts[muts[i]] = 1 + (counts[muts[i]] || 0);
                  }
                  console.log(counts)
                const mutsum = muts.reduce((count, code, idx) => {
                    count[code] = (count[code] || 0) + 1;
                    return count;
                }, {})
                if (mutsum) {
                  var result = Object.keys(mutsum).map(function(key, idx) {
                    return {angle: mutsum[key], 
                            label: String(key), 
                            color: pieColors[idx]};
                  });
                  console.log(result)
                  var signSort = result.sort(function (a, b) {
                    return b.angle - a.angle;
                  });
                  console.log(signSort)

                  var topSix = [];
                    for(let i = 0; i < 6; i++){
                      topSix.push(signSort[i])
}
                    this.setState({
                        mutsum: topSix
                    })
                }
            }
            this.setState({
                data: respo.data,
                keys: keyArr
            })
            console.log(this.state.data)
        }.bind(this))
    }
    componentWillMount() {
        navigator.geolocation.getCurrentPosition(function(pos) {
            this.setState({
                userLoc: [pos.coords.latitude, pos.coords.longitude]
            })

            helpers.getCurrentHood(this.state.userLoc).then(function(response) {
                this.setState({ curHood: response.data })
                this.fetchSigns(this.state.userLoc)
            }.bind(this))
        }.bind(this))
    }
/*      setTerm(term) {
          this.setState({ searchTerm: term });
        }*/
        componentDidMount() {
          this.getOCData()
        }
    render() {
        return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="App-header">
                <PlaceForm OClat={this.state.OClat} OClng={this.state.OClng}  placeLoc={this.state.placeLoc} getOCData={this.getOCData} fetchSigns={this.fetchSigns} />
              </div>            
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <MapContainer  data={this.state.data} keys={this.state.keys} curHood={this.state.curHood} allHoods={this.state.allHoods}  featSet={this.state.featSet} lat={this.state.lat} lng={this.state.lng} placeLoc={this.state.placeLoc} userLoc={this.state.userLoc}/>  
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Viz data={this.state.mutsum} />  
            </div>
          </div>
        </div>       
      </div>
        );
    }
}
export default App;