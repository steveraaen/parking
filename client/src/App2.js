import React, { Component } from 'react';
import CMarkers from './CMarkers.js'
import Form from './Form.js'
import GetButton from './GetButton.js'
import helpers from './helpers.js'
import day from './time.js'

class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLoc: []
        }

    }
    componentDidMount() {
      helpers.getAllHoods().then(function(resp) {
            this.setState({allHoods: resp.data})
}.bind(this))
      navigator.geolocation.watchPosition(function(pos) {
            this.setState({ userLoc: [pos.coords.longitude, pos.coords.latitude] })

          helpers.getCurrentHood(this.state.userLoc).then(function(response) {
                this.setState({curHood: response.data})

                helpers.initAutoGeoData(this.state.userLoc).then(function(respo)  {
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
        return (
        <div className="App">
          <div className="well nav">
            {/*<Form hoodNames={this.state.hoodNames} />*/}
          </div>
            <CMarkers data={this.state.data} keys={this.state.keys} oneHood={this.state.oneHood} allHoods={this.state.allHoods}  userLoc={this.state.userLoc}  />
       </div>
        );
    }
}
export default App2;