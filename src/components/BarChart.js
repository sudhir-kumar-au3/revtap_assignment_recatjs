  
import React from 'react'
import {Bar} from 'react-chartjs-2'
function BarChart(props) {
    return (
        <Bar data = {props.data} options={{
            title: {
                display: true,
                text: "Orders Count",
                fontSize: 20
            },
            responsive: true,
            scales: {
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Orders Count'
                  }
                }],
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Date'
                  }
                }]
            }
        }}></Bar>
    )
}

export default BarChart