import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import { fetchData } from "../apicall";
import moment from "moment";
const OrderCount = () => {
  const lineChartData = {
    labels: [],
    datasets: [
      {
        label: "Order-Counts",
        backgroundColor: "blue",
        borderWidth: "2",
        data: [],
      },
    ],
  };
  const [chartData, setChartData] = useState(lineChartData);
  useEffect(() => {
    fetchData().then((data) => {
      const response = data.customers;
      let orders = {};
      response.forEach(entry => {
        if(!orders[entry.created]){
          orders[entry.created] = 0;
        }
        orders[entry.created] += entry.orders;
      })
      // console.log("orders-alkf: ",orders)
      const oldData = lineChartData.datasets[0];
      const newData = {
        ...oldData,
        data: response.map((apiData) => apiData.orders),
      };
      const newChartData = {
        ...lineChartData,
        datasets: [newData],
        labels: lineChartData.labels.concat(
          response
            .map((data) => {
              let time = moment(data.created).format("DD");
              return time;
            })
            .reduce(
              (unique, item) =>
                unique.includes(item) ? unique : [...unique, item],
              []
            )
            .sort()
        ),
      };
      setChartData(newChartData);
    });
  }, [lineChartData]);
  return (
    <div>
      <BarChart data={chartData}></BarChart>
    </div>
  );
};

export default OrderCount;
