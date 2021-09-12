import React, { useEffect } from "react";
import Highcharts from "highcharts";
import _ from "underscore";
import AnnotationsFactory from "highcharts/modules/annotations";
import HighchartsReact from "highcharts-react-official";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Comfortaa",
    fontWeight: "bolder",
    fontSize: "20px",
    color: "#3f50b5",
    marginLeft: "15px",
    paddingTop: "10px",
  },
}))
AnnotationsFactory(Highcharts);

const NormalDistribution = (props) => {
    const classes = useStyles();
    const lowerBound = 10,
        upperBound = 30;

    const normalY = (x, mean, stdDev) =>
        Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));

    const getMean = (lowerBound, upperBound) => (upperBound + lowerBound) / 2;

    // distance between mean and each bound of a 95% confidence interval
    // is 2 stdDeviation, so distance between the bounds is 4
    const getStdDeviation = (lowerBound, upperBound) =>
        (upperBound - lowerBound) / 4;

    const generatePoints = (lowerBound, upperBound) => {
        let stdDev = getStdDeviation(lowerBound, upperBound);
        let min = lowerBound - 2 * stdDev;
        let max = upperBound + 2 * stdDev;
        let unit = (max - min) / 100;
        return _.range(min, max, unit);
    };

    let mean = getMean(lowerBound, upperBound);
    let stdDev = getStdDeviation(lowerBound, upperBound);
    let points = generatePoints(lowerBound, upperBound);

    let seriesData = points.map((x) => ({
        x,
        y: normalY(x, mean, stdDev) / 2.5,
    }));

    // useEffect(() => {
    //     const lowerBound = 100,
    //         upperBound = 300;

    //     const normalY = (x, mean, stdDev) =>
    //         Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));

    //     const getMean = (lowerBound, upperBound) =>
    //         (upperBound + lowerBound) / 2;

    //     // distance between mean and each bound of a 95% confidence interval
    //     // is 2 stdDeviation, so distance between the bounds is 4
    //     const getStdDeviation = (lowerBound, upperBound) =>
    //         (upperBound - lowerBound) / 4;

    //     const generatePoints = (lowerBound, upperBound) => {
    //         let stdDev = getStdDeviation(lowerBound, upperBound);
    //         let min = lowerBound - 2 * stdDev;
    //         let max = upperBound + 2 * stdDev;
    //         let unit = (max - min) / 100;
    //         return _.range(min, max, unit);
    //     };

    //     let mean = getMean(lowerBound, upperBound);
    //     let stdDev = getStdDeviation(lowerBound, upperBound);
    //     let points = generatePoints(lowerBound, upperBound);

    //     let seriesData = points.map((x) => ({
    //         x,
    //         y: normalY(x, mean, stdDev),
    //     }));

    //     Highcharts.chart("normal-container", {
    //         chart: {
    //             type: "area",
    //         },
    //         legend: {
    //             enabled: false,
    //         },
    //         series: [
    //             {
    //                 name: "BMI",
    //                 data: seriesData,
    //             },
    //         ],
    //         title: {
    //             text: "BMI",
    //         },
    //         subtitle: {
    //             text: "Your BMI against the national distribution",
    //         },
    //         credits: {
    //             enabled: false,
    //         },
    //         annotations: [
    //             {
    //                 labels: [
    //                     {
    //                         point: {
    //                             x: 1,
    //                             y: 1,
    //                             xAxis: 0,
    //                             yAxis: 0,
    //                         },
    //                         text: "x:  ---{x}<br/>y: {y}",
    //                     },
    //                 ],
    //                 labelOptions: {
    //                     x: 40,
    //                     y: -10,
    //                 },
    //             },
    //         ],
    //     });

    //     Highcharts.chart("test-container", {
    //         chart: {
    //             zoomType: "x",
    //         },

    //         title: {
    //             text: "Highcharts Annotations",
    //         },
    //         subtitle: {
    //             text: "Annotations connected to coordinates without data points",
    //         },

    //         series: [
    //             {
    //                 data: [
    //                     29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
    //                     216.4, 194.1, 95.6, 54.4,
    //                 ],
    //             },
    //         ],

    //         xAxis: {
    //             tickInterval: 0.5,
    //             gridLineWidth: 1,
    //         },

    //         annotations: [
    //             {
    //                 xValue: 4,
    //                 yValue: 125,
    //                 title: {
    //                     text: "Annotated chart!",
    //                 },
    //                 events: {
    //                     click: function (e) {
    //                         console.log("Annotation clicked:", this);
    //                     },
    //                 },
    //             },
    //         ],
    //     });
    // });
    return (
        <>
            {/* <div id="normal-container"></div>
            <div id="test-container"></div> */}
            <Typography className={classes.root}>BMI</Typography>
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    chart: {
                        type: "area",
                    },
                    yAxis: {
                        title: {
                            text: "",
                        },
                    },
                    legend: {
                        enabled: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                    xAxis: {
                        title: {
                            text: "BMI Value",
                        },
                    },
                    series: [
                        {
                            name: "BMI",
                            data: seriesData,
                        },
                    ],
                    title: {
                        text: "",
                    },
                    subtitle: {
                        text: "Your BMI against the national distribution",
                        align: 'left',
                    },
                    credits: {
                        enabled: false,
                    },
                    annotations: [
                        {
                            labels: [
                                {
                                    point: {
                                        x: 27.1,
                                        y: 0.141,
                                        xAxis: 0,
                                        yAxis: 0,
                                    },
                                    text: "You are here",
                                },
                            ],
                            labelOptions: {
                                x: 50,
                                y: -50,
                            },
                        },
                    ],
                }}
            />
        </>
    );
};

NormalDistribution.propTypes = {};

export default NormalDistribution;
