import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Label,
    ResponsiveContainer,
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time, amount, sleepType) {
    return { time, amount, sleepType };
}

const data = [
    createData("11", 0, 'awake'),
    createData("12", 300, 'sleep'),
    createData("1", 600, 'deep sleep'),
    createData("2", 800, 'awake'),
    createData("3", 1500, 'awake'),
    createData("4", 2000 , 'deep sleep'),
    createData("5", 2400, 'sleep'),
    createData("6", 2400, 'awake'),
];

export default function SleepChart() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Title>Sleep</Title>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis
                        dataKey="time"
                        stroke={theme.palette.text.secondary}
                    />
                    <YAxis type='category' dataKey="sleepType" interval={0} stroke={theme.palette.text.secondary}>
                        <Label
                            angle={0}
                            position="left"
                            style={{
                                textAnchor: "middle",
                                fill: theme.palette.text.primary,
                            }}
                        >
                        </Label>
                    </YAxis>
                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke={theme.palette.primary.main}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}
