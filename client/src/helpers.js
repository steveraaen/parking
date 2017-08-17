import axios from 'axios'



var helpers = {
    getHoodNames: function() {
        return axios.get('/hoodnames')
    },
    initGeoData: function() {
        return axios.get('/allsigns')
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

        console.log(uloc)
        return axios.get('/test', { params: { coordinates: uloc } })

    }
}

export default helpers;