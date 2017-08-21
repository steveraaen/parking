import axios from 'axios'
/*import moment from 'moment'

var date = moment();
var dow = date.day();*/

var helpers = {
    getCurrentHood: function(userLoc) {
        return axios.get('/userloc', { params: { coordinates: userLoc } })
    },    
    initGeoData: function() {
        return axios.get('/allsigns')
    },
    initAutoGeoData: function(userLoc) {
        return axios.get('/allsigns', { params: { coordinates: userLoc } })
    },
    getAllHoods: function() {
        return axios.get('/allhoods')
    },
    monData: function() {
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
    test: function(uloc) {
        return axios.get('/test', { params: { coordinates: uloc } })
    }
}
// ---------------------------------
export default helpers;






















