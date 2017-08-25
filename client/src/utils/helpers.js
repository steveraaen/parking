import axios from 'axios'
import day from './time.js'
import pwds from './passwds.js';

var helpers = {
        getOCData: function(location) {
        location = "24 West 75th St, NY"
        var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + pwds.ocage;
        console.log(queryURL)
        return axios.get(queryURL).then(function(response) {
          if (response.data.results) {
            console.log(response.data.results)
            return response.data.results;
          }
          else {
            console.log("Does not have data")
            return "";  
          }
          
        });
  },

    getToday: function(userLoc) {
        if(day === "MON")   {
           return axios.get('/mon', { params: { coordinates: userLoc } }) 
       } else if(day === "TUE") {
            return axios.get('/tue', { params: { coordinates: userLoc } })
       } else if(day === "WED") {
            return axios.get('/wed', { params: { coordinates: userLoc } })
       } else if(day === "THU") {
            return axios.get('/thu', { params: { coordinates: userLoc } })
       } else if(day === "FRI") {
            return axios.get('/fri', { params: { coordinates: userLoc } })
       } else if(day === "SAT") {
            return axios.get('/sat', { params: { coordinates: userLoc } })
       } else if(day === "SUN") {
            return axios.get('/sun', { params: { coordinates: userLoc } })
       }
    },

    getCurrentHood: function(userLoc) {
        return axios.get('/userloc', { params: { coordinates: userLoc } })
    },
    getSignsForHood: function() {
    return axios.get('/allwithin', { params: {}})
    },    
    initGeoData: function() {
        return axios.get('/allsigns')
    },
/*    initAutoGeoData: function(userLoc) {
        console.log(userLoc)
        return axios.get('/allsigns', { params: { coordinates: userLoc } })
    },*/
    getAllHoods: function() {
        return axios.get('/geojhoods')
    },
    initAutoGeoData: function() {
        return axios.get('/mon')
    },
    tueData: function() {
        return axios.get('/tue')
    },
    wedData: function() {
        return axios.get('/wed')
    },
    thuData: function() {
        return axios.get('/thu')
    },
    friData: function() {
        return axios.get('/fri')
    },
    satData: function() {
        return axios.get('/sat')
    },
    sunData: function() {
        return axios.get('/sun')
    },
    test: function(uloc) {
        return axios.get('/test', { params: { coordinates: uloc } })
    },
    getStats: function() {
        return axios.get('/idrange')
    }
}
// ---------------------------------
export default helpers;






















