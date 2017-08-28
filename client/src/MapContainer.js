import React, { Component } from 'react'
import { Map, TileLayer, GeoJSON, Marker } from 'react-leaflet'
import L from 'leaflet'

export default class MapContainer extends Component {

    constructor(props) {
      super(props);
/*      this.state = {
          lat: 40.656645,
          lng: -73.963907,
          zoom: 16
      }*/
      GeoJSON.propTypes = {}
      Marker.propTypes = {}
    }

    pointToLayer(feature, latlng) {
      var geojsonMarkerOptions = {
        radius: 3,
        fillColor: "white",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      var geojsonMarkerMonday = {
        radius: 3,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      var geojsonMarkerTuesday = {
        radius: 3,
        fillColor: "lightblue",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      var geojsonMarkerWednesday = {
        radius: 3,
        fillColor: "pink",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      var geojsonMarkerThursday = {
        radius: 3,
        fillColor: "yellow",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      var geojsonMarkerFriday = {
        radius: 3,
        fillColor: "red",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      var geojsonMarkerSaturday = {
        radius: 3,
        fillColor: "white",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      var geojsonMarkerSunday = {
        radius: 3,
        fillColor: "black",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      if (feature.properties.T.includes('11AM-12:30PM MON THU')) {
          return L.circleMarker(latlng, geojsonMarkerMonday);
      } else if (feature.properties.T.includes('2AM-6AM MON WED FRI')) {
          return L.circleMarker(latlng, geojsonMarkerTuesday);
      } else if (feature.properties.T.includes('"MON WED FRI 2AM-6AM"')) {
          return L.circleMarker(latlng, geojsonMarkerTuesday);
      } else if (feature.properties.T.includes("MON THU 6AM-6:30AM")) {
          return L.circleMarker(latlng, geojsonMarkerThursday);
      } else if (feature.properties.T.includes("MON THU 5:30AM-6AM")) {
          return L.circleMarker(latlng, geojsonMarkerFriday);
      } else if (feature.properties.T.includes("MON WED FRI 3AM-6AM")) {
          return L.circleMarker(latlng, geojsonMarkerSaturday);
      } else if (feature.properties.T.includes('SUN')) {
          return L.circleMarker(latlng, geojsonMarkerSunday);
      } else if (feature.properties.T.includes('SUN')) {
          return L.circleMarker(latlng, geojsonMarkerSunday);
      } else {
          return L.circleMarker(latlng, geojsonMarkerOptions);
      }
  }

  onEachFeature(feature, layer) {
      if (feature.properties && feature.properties.T) {
          layer.bindTooltip(feature.properties.T);
        }
      }
    componentDidMount() {

/*            const map = this.refs.map.leafletElement
            map.locate={setView:true, maxZoom:16}
            map.setView([this.props.userLoc[0], this.props.userLoc[1]])
            console.log(this.props.userLoc)*/
           
    }
    chooseMap() {

    }

  render() {

      return (
        <Map  ref='map' center={this.props.placeLoc}  zoom= {15}> 
        <Marker position={this.props.placeLoc} />
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.mapbox.com/styles/v1/sraaen/cj52ii4g62aqy2so4s6zbl9g9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3JhYWVuIiwiYSI6ImNqMmt2Y3k4djAwNGczM3IzaWU1a3E1eW8ifQ.dTGNBuW1jqOckGIAEDOUZw"/>
            <GeoJSON key={this.props.keys}  data={this.props.data}  pointToLayer={this.pointToLayer.bind(this)} onEachFeature={this.onEachFeature.bind(this)} />  
            <GeoJSON data={this.props.curHood} />

        </Map>
     
      )
    }
  }



















