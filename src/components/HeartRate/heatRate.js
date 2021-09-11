import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "react-apexcharts";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Comfortaa",
        fontWeight: "bolder",
        fontSize: "20px",
        color: "#3f50b5",
        marginLeft: "15px",
        paddingTop: "10px"
    },
}));

const date = ["01/09 9am", "02/09 1pm", "03/09 6am", "04/09 3pm", "05/09 3pm", "06/09 7pm", "07/09 8pm"];
const options = {
  xaxis: {
    categories: date,
    title: {
      text: 'Time of recorded heart rate'
    }
  },
  yaxis: {
    title: {
      text: 'Heart Rate (BPM)'
    }
  },
  tooltip: {
    x: {
      formatter: (s) => date[s - 1],
    },
  },
  chart: {
    toolbar: {
      tools: {
        reset: false,
        pan: false  
      },
    },
  },
};

const chart = {
    toolbar: {
        tools: {
            reset: false
        }
    }
}
const series = [
    {
        name: "Heart Rate",
        data: [60, 65, 67, 75, 79, 60, 60]
    },
];

const HeartRate = () => {
    const classes = useStyles();

    return (
        <Paper elevation={3}>
            <Typography className={classes.root}>Heart Rate</Typography>
            <Chart options={options} series={series} chart={chart} type="line" />
        </Paper>
    );
};

export default HeartRate;
