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
        
        var markerColors = ["#7f9999", "#7f7fb2", "#cc7f7f", "#B2997F", "#d6ffff", "#b2b2ef", "#7f9999", "#7f7fb2", "#cc7f7f", "#B2997F", "#d6ffff", "#b2b2ef", "#7f9999", "#7f7fb2", "#cc7f7f", "#B2997F", "#d6ffff", "#b2b2ef", "#7f9999", "#7f7fb2", "#cc7f7f", "#B2997F", "#d6ffff", "#b2b2ef", "#7f9999", "#7f7fb2", "#cc7f7f", "#B2997F", "#d6ffff", "#b2b2ef", "#7f9999", "#7f7fb2", "#cc7f7f", "#B2997F", "#d6ffff", "#b2b2ef"]
    
                        var geojsonMarkerOther = {
                            radius: 3,
                            fillColor: 'this.state.dotColors[j]',
                            color: "#000",
                            weight: 1,
                            opacity: 1,
                            fillOpacity: 0.8
                        };
        

        if (feature.properties.style) {
            return L.circleMarker(latlng, feature.properties.style);
        }   else {
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


    render() {

        return (
        <Map  center={this.props.sessionLoc}  zoom= {15.2}> 
        <Marker position={this.props.sessionLoc} />
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.mapbox.com/styles/v1/sraaen/cj52ii4g62aqy2so4s6zbl9g9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3JhYWVuIiwiYSI6ImNqMmt2Y3k4djAwNGczM3IzaWU1a3E1eW8ifQ.dTGNBuW1jqOckGIAEDOUZw"/>
            <GeoJSON key={this.props.keys}  data={this.props.data} pointToLayer={this.pointToLayer} onEachFeature={this.onEachFeature}  />  
        </Map>

        )
    }
}