import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ReactApexChart from "react-apexcharts";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Comfortaa",
    fontWeight: "bolder",
    fontSize: "20px",
    color: "#3f50b5",
    marginLeft: "15px",
    paddingTop: "10px",
  },
}));
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
      min: 35,
      max: 75,
    }),
  },
  {
    name: "Sat",
    data: generateData(10, {
      min: 35,
      max: 75,
    }),
  },
  {
    name: "Fri",
    data: generateData(10, {
      min: 35,
      max: 75,
    }),
  },
  {
    name: "Thu",
    data: generateData(10, {
      min: 35,
      max: 75,
    }),
  },
  {
    name: "Wed",
    data: generateData(10, {
      min: 35,
      max: 75,
    }),
  },
  {
    name: "Tue",
    data: generateData(10, {
      min: 35,
      max: 75,
    }),
  },
  {
    name: "Mon",
    data: generateData(10, {
      min: 35,
      max: 75,
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
  yaxis: {
    title: {
      text: 'Day of the week'
    }
  },
  xaxis: {
    title: {
      text: 'Week of the past 10 weeks'
    }
  },
  colors: ["#008FFB"],
  stroke: {
    width: 1,
  },
};

export default function SleepChart() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.root}>Sleep</Typography>
      <ReactApexChart options={options} series={data} type="heatmap" />
    </React.Fragment>
  );
}
