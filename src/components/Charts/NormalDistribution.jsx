import React, { useEffect } from "react";
import Highcharts from "highcharts";
import _ from "underscore";

const NormalDistribution = (props) => {
    useEffect(() => {
        const lowerBound = 100,
            upperBound = 300;

        const normalY = (x, mean, stdDev) =>
            Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));

        const getMean = (lowerBound, upperBound) =>
            (upperBound + lowerBound) / 2;

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
            y: normalY(x, mean, stdDev),
        }));

        Highcharts.chart("normal-container", {
            chart: {
                type: "area",
            },
            series: [
                {
                    data: seriesData,
                },
            ],
            credits: {
                enabled: false,
            },
            annotations: [
                {
                    labels: [
                        {
                            point: {
                                x: 1,
                                y: 1,
                                xAxis: 0,
                                yAxis: 0,
                            },
                            text: "x: {x}<br/>y: {y}",
                        },
                    ],
                    labelOptions: {
                        x: 40,
                        y: -10,
                    },
                },
            ],
        });

        // Highcharts.chart("test-container", {
        //     chart: {
        //         zoomType: "x",
        //     },

        //     title: {
        //         text: "Highcharts Annotations",
        //     },
        //     subtitle: {
        //         text: "Annotations connected to coordinates without data points",
        //     },

        //     series: [
        //         {
        //             data: [
        //                 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
        //                 216.4, 194.1, 95.6, 54.4,
        //             ],
        //         },
        //     ],

        //     xAxis: {
        //         tickInterval: 0.5,
        //         gridLineWidth: 1,
        //     },

        //     annotations: [
        //         {
        //             xValue: 4,
        //             yValue: 125,
        //             title: {
        //                 text: "Annotated chart!",
        //             },
        //             events: {
        //                 click: function (e) {
        //                     console.log("Annotation clicked:", this);
        //                 },
        //             },
        //         },
        //     ],
        // });
    });
    return (
        <>
            <div id="normal-container"></div>
            {/* <div id="test-container"></div> */}
        </>
    );
};

NormalDistribution.propTypes = {};

export default NormalDistribution;
