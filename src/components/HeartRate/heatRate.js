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

const date = ["01/09/2021 9:00", "02/09/2021 13:00", "03/09/2021 6:00", "04/09/2021 15:00", "05/09/2021 15:00", "06/09/2021 19:00", "07/09/2021 20:00"];
const options = {
  xaxis: {
    categories: Array.from(Array(7).keys()),
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
        name: "heart beats",
        data: [60, 65, 67, 75, 79, 60, 60]
    },
];

const HeartRate = () => {
    const classes = useStyles();

    return (
        <Paper elevation={3}>
            <Typography className={classes.root}>Heart Beats</Typography>
            <Chart options={options} series={series} chart={chart} type="line" />
        </Paper>
    );
};

export default HeartRate;
