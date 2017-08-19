import axios from 'axios'
import moment from 'moment'

var date = moment();
var dow = date.day();

var helpers = {
    today: function() {

    if (dow === 0) {
        return axios.get('/sun')
    } else if (dow === 1) {
        return axios.get('/mon')
    } else if (dow === 2) {
        return axios.get('/tue')
    } else if (dow === 3) {
        return axios.get('/wed')
    } else if (dow === 4) {
        return axios.get('/thu')
    } else if (dow === 5) {
        return axios.get('/fri')
    } else if (dow === 6) {
        return axios.get('/sat')
    }
},
    initGeoData: function() {
        console.log(dow)
        return axios.get('/allsigns')
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






















