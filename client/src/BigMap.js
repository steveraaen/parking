import React, { Component } from 'react'
import { Map, TileLayer, GeoJSON, LayersControl, LayerGroup, Polygon} from 'react-leaflet'
import L from 'leaflet'
const { BaseLayer, Overlay } = LayersControl

export default class BigMap extends Component {

  constructor(props) {
    super(props) ; 
      this.state = {
      lat: 40.715487,
      lng: -73.898246,
      zoom: 12
  }
  GeoJSON.propTypes = { 
}

}


  render() {
    var center = [this.state.lat, this.state.lng];
    
    return (
      <Map  center={center} zoom={this.state.zoom}> 

        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.mapbox.com/styles/v1/sraaen/cj52ii4g62aqy2so4s6zbl9g9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3JhYWVuIiwiYSI6ImNqMmt2Y3k4djAwNGczM3IzaWU1a3E1eW8ifQ.dTGNBuW1jqOckGIAEDOUZw"/>
          
         <Polygon positions={this.props.oneHood.geometry.coordinates} />
         
       
       
      </Map>
    )
  }
}
































