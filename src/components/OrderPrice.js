import React, { useState, useEffect } from "react";
import LineChart from "./LineChart";
import { fetchData } from "../apicall";
import moment from "moment";
const OrderCount = () => {
  const lineChartData = {
    labels: [],
    datasets: [
      {
        label: "Order-Price",
        type: "line",
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "blue",
        fillTension: false,
        borderWidth: "1",
        lineTension: 0.5,
        data: [],
      },
    ],
  };
  const [chartData, setChartData] = useState(lineChartData);
  useEffect(() => {
    fetchData().then((data) => {
      const response = data.orders;

      const oldData = lineChartData.datasets[0];
      const newData = {
        ...oldData,
        data: response.map((data) => data.price),
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
  useEffect(() => {
    console.log(chartData)
  },[chartData])
  return (
    <div>
      <LineChart data={chartData}></LineChart>
    </div>
  );
};

export default OrderCount;
