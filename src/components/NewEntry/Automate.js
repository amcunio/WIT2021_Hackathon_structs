import Button from "@material-ui/core/Button";
import React from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { makeStyles } from "@material-ui/core/styles";
import Typist from "react-typist";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const useStyles = makeStyles(() => ({
  overlay: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: 2,
  },
  chat: {
    marginLeft: "80px",
  },
  sign: {
    color: "green",
    paddingLeft: "75px",
    fontSize: "22px",
    marginTop: "30px",
    fontWeight: "bold",
    fontFamily: "Comfortaa",
  },
}));
const Automate = ({handleClose}) => {
  const classes = useStyles()
  const data = [];
  for (let i = 1; i < 16; i++) {
    data.push({
      time: i,
      bpm: getRandomArbitrary(60, 70)
    })
  }

  const [saveData, setSaveData] = React.useState(false)
  const [show, setShow] = React.useState("block")

  setTimeout(() => {
      setSaveData(true)
  }, 15400);
  
  setTimeout(() => {
    setShow("None")
    handleClose(false)
  }, 16000);
  return (
    <div>
      <div className={classes.overlay} style={{display: show}}>
        <LineChart
          width={300}
          height={250}
          data={data}
          margin={{ top: 120, right: 0, left: 100, bottom: 5 }}
          className={classes.chart}
        >
          <YAxis hide domain={[60, 70]} />
          <Line
            type="monotone"
            dataKey="bpm"
            stroke="#fe0000"
            dot={false}
            strokeWidth={5}
            animationDuration={15000}
          />
        </LineChart>
        <div>
          {saveData ? (
            <div
              className={classes.sign}
            >
              Saving data...
            </div>
          ) : (
            <div
              className={classes.sign}
            >
              Measuring in progress...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Automate;
