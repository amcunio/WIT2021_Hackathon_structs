import { Dialog, IconButton, Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "react-apexcharts";
import AddBoxIcon from "@material-ui/icons/AddBox";
import NewEntry from "../NewEntry/NewEntry";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Comfortaa",
    fontWeight: "bolder",
    fontSize: "20px",
    color: "#3f50b5",
    marginLeft: "15px",
    paddingTop: "10px",
  },
  container: {
    display: "flex",
  },
  addIcon: {
    color: "#3f50b5",
  },
  newEntryContainer: {
    width: '375px',
  }
}));


const HeartRate = () => {
  const classes = useStyles();

  const date = ["01/09 9am", "02/09 1pm", "03/09 6am", "04/09 3pm", "05/09 3pm", "06/09 7pm", "07/09 8pm"];
  const options = {
    chart: {
      id: "basic-bar",
    },
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
      }
    },
    annotations: {
      yaxis: [{
        y: 65,
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396'
          },
          text: 'Resting HR'
        }
      }],
      xaxis: [{
        x: 3,
        x2: 4,
        fillColor: '#ff9393',
        label: {
          text: 'Irregularity'
        }
      }]
    },
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
      data: [60, 65, 67, 75, 76, 60, 60]
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.container}>
        <Typography className={classes.root}>Heart Rate</Typography>
        <IconButton>
          <AddBoxIcon className={classes.addIcon} onClick={handleClickOpen} />
        </IconButton>
        <Dialog
          onClose={handleClose}
          open={open}
          className={classes.newEntryContainer}
        >
          <NewEntry handleClose={handleClose}/>
        </Dialog>
      </div>

      <Chart options={options} series={series} chart={chart} type="line" />
    </>
  );
};

export default HeartRate;
