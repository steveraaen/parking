import React, { Component } from 'react';
import MapContainer from './MapContainer.js'
import PlaceForm from './PlaceForm.js'
/*import Viz from './Viz.js'*/
import Stats from './Stats.js'
import Timeline from './Timeline.js'
import helpers from './utils/helpers.js'
import day from './utils/time.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dow: day,
            placeLoc: null
        }
        this.fetchSigns = this.fetchSigns.bind(this)
        this.setPlaceLoc = this.setPlaceLoc.bind(this)
    }

    fetchSigns(placeLoc) {
        var pieColors = ["#7f9999", "#7f7fb2", "#cc7f7f", "#B2997F", "#d6ffff", "#b2b2ef", "#7f9999", "#7f7fb2", "#cc7f7f", "#B2997F", "#d6ffff", "#b2b2ef", "#7f9999", "#7f7fb2", "#cc7f7f", "#B2997F", "#d6ffff", "#b2b2ef"]
        if (!this.state.placeLoc) {
            placeLoc = this.state.userLoc
        } else
            placeLoc = this.state.placeLoc
        this.setState({ sessionLoc: placeLoc })

        helpers.getToday(placeLoc).then(function(respo) {
            console.log(respo)
            var keyArr = respo.data.map((k_, idx) => {
                return 'k_' + idx
            })
            var amArray = []
            var pmArray = []
            var dayArray =[]
            var times = function() {
                for (let i = 0; i < 12; i++) {
                    let hour = `-${i}:00AM`
                    let halfHour = "-" + i + ":30AM"
                    amArray.push(hour, halfHour)
                }
                for (let i = 0; i < 12; i++) {
                    let hour = `"-${i}:00PM`
                    let halfHour = "-" + i + ":30PM"
                    pmArray.push(hour, halfHour)
                }
                amArray[0] = `-12:00AM`
                amArray[1] = `-12:30AM`
                pmArray[0] = `-12:00PM`
                pmArray[1] = `-12:30PM`
                console.log(amArray)
                console.log(pmArray)
                dayArray = amArray.concat(pmArray)
                console.log(dayArray)
            }
            times()
            if (Array.isArray(respo.data)) {
                var timeArray = []                                   
                      for (let j = 0; j < dayArray.length; j++) {
                        for (let i = 0; i < respo.data.length; i++) {
                        if (respo.data[i].properties.T.includes(dayArray[j])) {
                            timeArray.push(respo.data[i], dayArray[j])
                        }
                    }
                }
                this.setState({timeArray: timeArray})
                console.log(this.state.timeArray)
// ---------------------------------
                const muts = [];
                const statArray = respo.data;
                for (let i = 0; i < statArray.length; i++) {
                    var t = statArray[i].properties.T
                    muts.push(t)
                }
                var counts = {};
                for (var i = 0; i < muts.length; i++) {
                    counts[muts[i]] = 1 + (counts[muts[i]] || 0);
                }
                const mutsum = muts.reduce((count, code, idx) => {
                    count[code] = (count[code] || 0) + 1;
                    return count;
                }, {})
                if (mutsum) {
                    var result = Object.keys(mutsum).map(function(key, idx) {
                        return {
                            angle: mutsum[key],
                            label: String(key),
                            color: pieColors[idx]
                        };
                    });
                    var signSort = result.sort(function(a, b) {
                        return b.angle - a.angle;
                    });
                    var topSix = [];
                    for (let i = 0; i < signSort.length; i++) {
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

        }.bind(this))
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

    render() {
        return (
      <div className="App">
      <h2>ASP Turnover</h2><code className="center"></code>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
                <Timeline userLoc={this.state.userLoc} accuracy={this.state.accuracy}  data={this.state.mutsum} signSet={this.state.data} />             
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
                <PlaceForm setPlaceLoc={this.setPlaceLoc} fetchSigns={this.fetchSigns} />             
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Stats data={this.state.mutsum} timeArray={this.state.timeArray} signSet={this.state.data}/>  
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 well">
              <MapContainer  data={this.state.data} keys={this.state.keys}  mutsum={this.state.mutsum} sessionLoc={this.state.sessionLoc} placeLoc={this.state.placeLoc} userLoc={this.state.userLoc}/>  
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
             {/* <Viz data={this.state.mutsum} signSet={this.state.data}/> */} 
            </div>
          </div>
        </div>       
      </div>
        );
    }
}
export default App;