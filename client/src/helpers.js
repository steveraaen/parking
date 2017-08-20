import axios from 'axios'
/*import moment from 'moment'

var date = moment();
var dow = date.day();*/

var helpers = {

    initGeoData: function() {
        return axios.get('/allsigns')
    },
    initAutoGeoData: function(uloc) {
        return axios.get('/allsigns', { params: { coordinates: uloc } })
    },
    getAllHoods: function() {
        return axios.get('/allhoods')
    },
    getHoodNames: function() {
        return axios.get('/hoodnames')
    },
    getOneHood: function() {
        return axios.get('/onehood')
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






















