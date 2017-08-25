import React, { Component } from 'react'
import { Map, TileLayer, GeoJSON, LayersControl, Marker, Polygon } from 'react-leaflet'
import L from 'leaflet'
const { BaseLayer, Overlay } = LayersControl

export default class MapContainerJr extends Component {

    constructor(props) {
      super(props);
      this.state = {
          lat: 40.656645,
          lng: -73.963907,
          zoom: 16
      }
      GeoJSON.propTypes = {}
      Marker.propTypes = {}
    }


  render() {

      return (
        <Map  ref='map' center={this.props.userLoc}  zoom= {11}> 
        <Marker position={this.props.userLoc} />
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.mapbox.com/styles/v1/sraaen/cj52ii4g62aqy2so4s6zbl9g9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3JhYWVuIiwiYSI6ImNqMmt2Y3k4djAwNGczM3IzaWU1a3E1eW8ifQ.dTGNBuW1jqOckGIAEDOUZw"/>
            <GeoJSON color="white"  data={this.props.coords}  />             
        </Map>
     
      )
      }
  }



















