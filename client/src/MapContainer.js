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

      var markerColors= ["#008AF8","#008A1F","#e6ca2d","#CC1713","#faa3a4","#e62d69","#f99ff6","#d411cf","#1af9f2","#0ab3c2"]
            var geojsonMarkerAM1 = {
        radius: 3,
        fillColor: markerColors[0],
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };

      var geojsonMarkerPM1 = {
        radius: 3,
        fillColor: markerColors[1],
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      var geojsonMarkerAM2 = {
        radius: 3,
        fillColor: markerColors[2],
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      var geojsonMarkerPM2 = {
        radius: 3,
        fillColor: markerColors[3],
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      var geojsonMarkerAM3 = {
        radius: 3,
        fillColor: markerColors[4],
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      var geojsonMarkerPM3 = {
        radius: 3,
        fillColor: markerColors[5],
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      var geojsonMarkerAM4 = {
        radius: 3,
        fillColor: markerColors[6],
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      var geojsonMarkerPM4 = {
        radius: 3,
        fillColor: markerColors[7],
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      var geojsonMarkerAM5 = {
        radius: 3,
        fillColor: markerColors[8],
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
            var geojsonMarkerPM5 = {
        radius: 3,
        fillColor: markerColors[9],
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
                  var geojsonMarkerOther = {
        radius: 3,
        fillColor: "gray",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
      if (feature.properties.T.includes(this.props.mutsum[0].label)) {
          return L.circleMarker(latlng, geojsonMarkerAM1);
      } else if (feature.properties.T.includes(this.props.mutsum[1].label)) {
          return L.circleMarker(latlng, geojsonMarkerPM1);
      } else if (feature.properties.T.includes(this.props.mutsum[2].label)) {
          return L.circleMarker(latlng, geojsonMarkerAM2);
      } else if (feature.properties.T.includes(this.props.mutsum[3].label)) {
          return L.circleMarker(latlng, geojsonMarkerPM2);
      } else if (feature.properties.T.includes(this.props.mutsum[4].label)) {
          return L.circleMarker(latlng, geojsonMarkerAM3);
      } else if (feature.properties.T.includes(this.props.mutsum[5].label)) {
          return L.circleMarker(latlng, geojsonMarkerPM3);
      } else if (feature.properties.T.includes(this.props.mutsum[6].label)) {
          return L.circleMarker(latlng, geojsonMarkerAM4);
      } else if (feature.properties.T.includes(this.props.mutsum[7].label)) {
          return L.circleMarker(latlng, geojsonMarkerPM4);
      } else if (feature.properties.T.includes(this.props.mutsum[8].label)) {
          return L.circleMarker(latlng, geojsonMarkerAM5);
      } else if (feature.properties.T.includes(this.props.mutsum[9].label)) {
          return L.circleMarker(latlng, geojsonMarkerPM5);
      } else {
          return L.circleMarker(latlng, geojsonMarkerOther);
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
        <Map  ref='map' center={this.props.userLoc}  zoom= {15.5}> 
        <Marker position={this.props.userLoc} />
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.mapbox.com/styles/v1/sraaen/cj52ii4g62aqy2so4s6zbl9g9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3JhYWVuIiwiYSI6ImNqMmt2Y3k4djAwNGczM3IzaWU1a3E1eW8ifQ.dTGNBuW1jqOckGIAEDOUZw"/>
            <GeoJSON key={this.props.keys}  data={this.props.data}  pointToLayer={this.pointToLayer.bind(this)} onEachFeature={this.onEachFeature.bind(this)} />  
            <GeoJSON data={this.props.curHood} />

        </Map>
     
      )
    }
  }



















