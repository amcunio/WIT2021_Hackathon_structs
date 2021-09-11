import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
// import {
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     Label,
//     ResponsiveContainer,
// } from "recharts";
import ReactApexChart from "react-apexcharts";
import Title from "./Title";
function generateData(count, yrange) {
  var i = 0,
    series = [];
  while (i < count) {
    var x = "w" + (i + 1).toString(),
      y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }
  return series;
}
const data = [
  {
    name: "Sun",
    data: generateData(10, {
      min: 20,
      max: 75,
    }),
  },
  {
    name: "Sat",
    data: generateData(10, {
      min: 20,
      max: 75,
    }),
  },
  {
    name: "Fri",
    data: generateData(10, {
      min: 20,
      max: 75,
    }),
  },
  {
    name: "Thu",
    data: generateData(10, {
      min: 20,
      max: 75,
    }),
  },
  {
    name: "Wed",
    data: generateData(10, {
      min: 20,
      max: 75,
    }),
  },
  {
    name: "Tue",
    data: generateData(10, {
      min: 20,
      max: 75,
    }),
  },
  {
    name: "Mon",
    data: generateData(10, {
      min: 0,
      max: 100,
    }),
  },
];

const options = {
  chart: {
    height: 350,
    type: "heatmap",
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#008FFB"],
//   title: {
//     text: "HeatMap Chart (Single color)",
//   },
    stroke: {
        width: 1,
    }
};

export default function SleepChart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Sleep</Title>
      <ReactApexChart options={options} series={data} type="heatmap" />
    </React.Fragment>
  );
}
