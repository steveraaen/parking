import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts'

export default class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: {
            	      credits: {
							        enabled: false
							    },
                xAxis: {
                    categories: ['Midnight', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', 'Noon', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30']
                },
                series: [{
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

                }],
                chart: {
						        type: 'column',
						        height: 200
						    },
						    title: {
        					text: ""
    }
            }
        }
    }

    componentWillReceiveProps(nextProps) {
    
    var timePoints = nextProps.timeObjects
			if(Array.isArray(timePoints)) {
				var dataArr = []
				var textArr = []
				for (let i = 0; i < timePoints.length; i++) {
                    console.log(timePoints[i].count)
                    dataArr.push(timePoints[i].count)
                    textArr.push(timePoints[i].text)
                }
           this.setState({
	            	config:{
	            		    credits: {
							        enabled: false
							    },
	            		series: [{
	            			data: dataArr
	            		}],
	            		chart: {
						        type: 'column',
						        height: 250
	            	},
                xAxis: {
                    categories: textArr
                },
	            	yAxis: {
	            		categories: dataArr
	            	},
						    title: {
        					text: `There are ${nextProps.data.length} street parking spaces within a half mile `
    }
}
	           })
					}    
    }
    render() {



        return ( <ReactHighcharts config={ this.state.config }/>
        )
    }
}