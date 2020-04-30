  
import React from 'react'
import {Line} from 'react-chartjs-2'
function LineChart(props) {
    return (
        <Line data = {props.data} options={{
            title: {
                display: true,
                text: "Orders Total Price",
                fontSize: 20
            },
            responsive: true,
            scales: {
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Total Price'
                  }
                }],
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Date'
                  }
                }]
            }
        }}></Line>
    )
}

export default LineChart