import React, { Component } from 'react'
import { Map, TileLayer,  Tooltip, GeoJSON} from 'react-leaflet'
import L from 'leaflet'

export default class CMarkers extends Component {

  constructor(props) {
    super(props) ; 
      this.state = {
      lat: 40.676645,
      lng: -73.983907,
      zoom: 16
  }
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
    fillColor: "blue",
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

if(feature.properties.T.includes('MON')) {
  return L.circleMarker(latlng, geojsonMarkerMonday);
}   
else if (feature.properties.T.includes('TUE')){
  return L.circleMarker(latlng, geojsonMarkerTuesday);
}   
else if (feature.properties.T.includes('WED')){
  return L.circleMarker(latlng, geojsonMarkerWednesday);
} 
else if (feature.properties.T.includes('THU')){
  return L.circleMarker(latlng, geojsonMarkerThursday);
}
else if (feature.properties.T.includes('FRI')){
  return L.circleMarker(latlng, geojsonMarkerFriday);
}  
else if (feature.properties.T.includes('SAT')){
  return L.circleMarker(latlng, geojsonMarkerSaturday);
} 
else if (feature.properties.T.includes('SUN')){
  return L.circleMarker(latlng, geojsonMarkerSunday);
} 
else {
  return L.circleMarker(latlng, geojsonMarkerOptions);
}


}
onEachFeature(feature, layer) {
   
    if (feature.properties && feature.properties.T) {
        layer.bindTooltip(feature.properties.T);
    }
}
  render() {
    const center = [this.state.lat, this.state.lng];

    return (
      <Map  center={center} zoom={this.state.zoom}> 

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.mapbox.com/styles/v1/sraaen/cj52ii4g62aqy2so4s6zbl9g9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3JhYWVuIiwiYSI6ImNqMmt2Y3k4djAwNGczM3IzaWU1a3E1eW8ifQ.dTGNBuW1jqOckGIAEDOUZw"
        />
{/*        <GeoJSON  key={this.props.keys} data={this.props.data}  children={this.props.text} pointToLayer={this.pointToLayer.bind(this)} onEachFeature={this.onEachFeature.bind(this)} />*/}
  {/*     <Polygon positions={this.props.latlngs} name={this.props.hoodName} />*/}
       
        
      </Map>
    )
  }
}