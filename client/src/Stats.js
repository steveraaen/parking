import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts'
var rhc = ReactHighcharts.Highcharts.getOptions()
console.log(rhc)
export default class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: {
                credits: {
                    enabled: false
                },
 
                chart: {
                    type: 'bar'
                },
                title: false,
                legend: false
            }
        }
    }

    componentWillReceiveProps(nextProps) {

        var timePoints = nextProps.timeObjects
        if (Array.isArray(timePoints)) {



            var dataArr = []
            var textArr = []
            var colorArray = []
            var timeArray = []
            for (let i = 0; i < timePoints.length; i++) {

                dataArr.push(timePoints[i].count)
                textArr.push(timePoints[i].text.split(' ')[0])
                colorArray.push(timePoints[i].color)
                timeArray.push(timePoints[i].time.format('hh:mm A'))
            }
            this.setState({
                config: {
                    credits: {
                        enabled: false
                    },
                    series: [{
                        data: dataArr
                    }],
                    chart: {
                        type: 'bar',
                        height: 600
                    },
                    plotOptions: {
                        bar: {
                            colorByPoint: true,
                            height: 10
                        }
                    },
                    colors: colorArray,
                    xAxis: {
                        categories: timeArray
                    },
                    yAxis: {
                        categories: dataArr
                    },

                }
            })
        }
    }
    render() {
        return ( < ReactHighcharts config = { this.state.config }
            />
        )
    }
}