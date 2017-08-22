import React, { Component } from 'react'
import { Map, TileLayer, GeoJSON, LayersControl, Marker } from 'react-leaflet'
import L from 'leaflet'
const { BaseLayer, Overlay } = LayersControl

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
      if (feature.properties.T.includes('MON')) {
          return L.circleMarker(latlng, geojsonMarkerMonday);
      } else if (feature.properties.T.includes('TUE')) {
          return L.circleMarker(latlng, geojsonMarkerTuesday);
      } else if (feature.properties.T.includes('WED')) {
          return L.circleMarker(latlng, geojsonMarkerWednesday);
      } else if (feature.properties.T.includes('THU')) {
          return L.circleMarker(latlng, geojsonMarkerThursday);
      } else if (feature.properties.T.includes('FRI')) {
          return L.circleMarker(latlng, geojsonMarkerFriday);
      } else if (feature.properties.T.includes('SAT')) {
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

            const map = this.refs.map.leafletElement
          /*  map.setView([this.props.userLoc[0], this.props.userLoc[1]])*/
            console.log(this.props.userLoc)
           
    }

    /*  sendPoly(props) {
        return <Polygon color="white" positions={this.props.latLngList} />   
      }*/
  render() {

      var lat = this.props.lat;
      var lng = this.props.lng;
      var zoom = 16;
      var center = [40.656645, -73.963907];
      var newCenter = [this.props.lat, this.props.lng];
console.log(center)
console.log(newCenter)
      if(newCenter) {
      return (
        <Map  ref='map' center={this.props.userLoc}  zoom= {zoom}> 
        <Marker position={this.props.userLoc} />
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.mapbox.com/styles/v1/sraaen/cj52ii4g62aqy2so4s6zbl9g9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3JhYWVuIiwiYSI6ImNqMmt2Y3k4djAwNGczM3IzaWU1a3E1eW8ifQ.dTGNBuW1jqOckGIAEDOUZw"/>
            <GeoJSON key={this.props.keys} positions={this.props.curHood} data={this.props.data}  pointToLayer={this.pointToLayer.bind(this)} onEachFeature={this.onEachFeature.bind(this)} />          
        }
         
        </Map>
      )} else {
      return (
<div className="jumbotron">
<h1>Loser !</h1>
</div>
      )
      }
  }
}


















