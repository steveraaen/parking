import React, { Component } from 'react';
import MapContainer from './MapContainer.js'
import PlaceForm from './PlaceForm.js'
import Stats from './Stats.js'

import helpers from './utils/helpers.js'
import day from './utils/time.js'
import moment from 'moment'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dotColors: ["#7f9999", "#7f7fb2", "#cc7f7f", "#B2997F", "#d6ffff", "#b2b2ef", "#7f9999", "#7f7fb2", "#cc7f7f", "#B2997F", "#d6ffff", "#b2b2ef", "#7f9999", "#7f7fb2", "#cc7f7f", "#B2997F", "#d6ffff", "#b2b2ef"],
            dow: day,
            placeLoc: null,
        }
        this.fetchSigns = this.fetchSigns.bind(this)
        this.setPlaceLoc = this.setPlaceLoc.bind(this)
       
    }
    fetchSigns(placeLoc) {

        if (!this.state.placeLoc) {
            placeLoc = this.state.userLoc
        } else
            placeLoc = this.state.placeLoc
        this.setState({ sessionLoc: placeLoc })

        helpers.getToday(placeLoc).then(function(respo) {

            var keyArr = respo.data.map((k_, idx) => {
                return 'k_' + idx
            })
            var test1 =[]
            for(let i = 0; i < respo.data.length; i++) {
                var time = respo.data[i].properties.T.split('-')[1]
                respo.data[i].properties.time = time
                    test1.push(respo.data[i].properties.time)
                    }

               const timeSummary = respo.data.reduce((count, code) => {
                  count[code.properties.time] = (count[code.properties.time] || 0) + 1;
                  return count;
                }, {})
               

                var result = Object.keys(timeSummary).map(function(key, idx) {
                    var arrSplit = key.split(' ')
                    var t = moment(arrSplit[0], 'HH:mm A' )
                    
                   
                    return {
                        y: timeSummary[key],
                        x: String(key),
                        tod: t,
                        days: arrSplit              
                    };
                });
                
            var timeObjects = []    
            for(let j = 0; j < result.length; j++) {

                        var geojsonMarker = {
                            radius: 3,
                            fillColor: this.state.dotColors[j],
                            color: "#000",
                            weight: 1,
                            opacity: 1,
                            fillOpacity: 0.8
                        };
                        var timeStyle = {
                            color: this.state.dotColors[j],
                            text: result[j].x,
                            count: result[j].y * 5,
                            time: result[j].tod
                        }
                                            
                for(let i = 0; i < respo.data.length; i++) {
                    if(respo.data[i].properties.time.includes(result[j].x)) {
                       respo.data[i].properties.style = geojsonMarker                      
                    }
                }
                timeObjects.push(timeStyle)
            }
          timeObjects.sort(function(a,b) {return (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0);} );
            
            this.setState({
                data: respo.data,
                keys: keyArr,
                timeObjects: timeObjects
            })
          
        }.bind(this))
        console.log(this.state)
    }
    componentWillMount() {

        navigator.geolocation.getCurrentPosition(function(pos) {
            console.log(pos)
            this.setState({
                userLoc: [pos.coords.latitude, pos.coords.longitude],
                accuracy: pos.coords.accuracy
            })
            helpers.getCurrentHood(this.state.userLoc).then(function(response) {
                this.setState({ curHood: response.data })
                this.fetchSigns(this.state.userLoc)

            }.bind(this))
        }.bind(this))
    }
    setPlaceLoc(place) {
        this.setState({ placeLoc: place })
    }

    componentDidMount(){

    }
    render() {

        return (
      <div className="App">
      <h2>NYC Street Parking</h2>
      
        <div className="container">
          <div className="row">
            <div className="col-sm-12 well">

                <PlaceForm sessionLoc={this.state.sessionLoc} data={this.state.data} setPlaceLoc={this.setPlaceLoc} fetchSigns={this.fetchSigns} />             
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 well">
              <Stats sessionLoc={this.state.sessionLoc} data={this.state.data} timeObjects={this.state.timeObjects} dotColors={this.state.dotColors}/>  
              </div>
          </div>
          <div className="row">

            <div className="col-sm-1">
            </div>
            <div className="col-sm-10 well">
             <MapContainer  data={this.state.data} keys={this.state.keys}   sessionLoc={this.state.sessionLoc} placeLoc={this.state.placeLoc} userLoc={this.state.userLoc}/>
            </div>
            <div className="col-sm-1">
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
            </div>
          </div>
        </div>       
      </div>
        );
    }
}
export default App;