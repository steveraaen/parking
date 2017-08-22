import axios from 'axios'
import day from './time.js'

var helpers = {

    getToday: function() {
        if(day === "MON")   {
           return axios.get('/mon') 
       } else if(day === "TUE") {
            return axios.get('/tue')
       } else if(day === "WED") {
            return axios.get('/wed')
       } else if(day === "THU") {
            return axios.get('/thu')
       } else if(day === "FRI") {
            return axios.get('/fri')
       } else if(day === "SAT") {
            return axios.get('/sat')
       } else if(day === "SUN") {
            return axios.get('/sun')
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
        return axios.get('/allhoods')
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
    }
}
// ---------------------------------
export default helpers;






















