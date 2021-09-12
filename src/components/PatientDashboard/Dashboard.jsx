import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import NormalDistribution from "../Charts/NormalDistribution";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SleepChart from "../Charts/SleepChart";
import HeartRate from "../HeartRate/heatRate";
import { Dialog } from "@material-ui/core";
import ProfileEdit from "./ProfileEdit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import NewParam from "../NewParam/NewParam";
import Chart from "react-apexcharts";
import AddBoxIcon from "@material-ui/icons/AddBox";
import logoWhite from "../../assets/logo.png"
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Automed
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    background: "#0e0e0e",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    marginRight: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  footer: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    margin: "1rem 0",
  },
  profile: {
    width: "400px",
  },
  plusParam: {
    marginRight: "-6px",
  },
  pressureTitle: {
    fontFamily: "Comfortaa",
    fontWeight: "bolder",
    fontSize: "20px",
    color: "#3f50b5",
    marginLeft: "15px",
    paddingTop: "10px",
  },
  newContainer: {
    display: "flex",
  },
  addIcon: {
    color: "#3f50b5",
  },
}));

const options = {};

const series = [];
const chart = {};

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [addChart, setAddChart] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute">
                <Toolbar className={classes.toolbar}>
                    <img className={classes.title} src={logoWhite} alt="logo" height="60px"/>
                    <IconButton
                        color="inherit"
                        onClick={handleClickOpen2}
                        className={classes.plusParam}
                    >
                        <AddCircleIcon />
                    </IconButton>
                    <Dialog
                        onClose={handleClose2}
                        open={open2}
                        className={classes.profile}
                    >
                        <NewParam handleClose={setOpen2} setAddChart={setAddChart} />
                    </Dialog>

                    <IconButton color="inherit" onClick={handleClickOpen}>
                        <AccountCircleIcon />
                    </IconButton>
                    <Dialog onClose={handleClose} open={open} className={classes.profile}>
                        <ProfileEdit handleClose={handleClose} />
                    </Dialog>
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper>
                              <HeartRate />
                              <Alert variant="filled" severity="info">
                                  Your heartrate has been quite unstable recently!
                              </Alert>
                            </Paper>
                        </Grid>
                        {/* Sleep Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper>
                                <SleepChart />
                                <Alert variant="filled" severity="info">
                                    Last night your sleep quality was down 50% from your average
                                </Alert>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper>
                              <NormalDistribution />
                              <Alert variant="filled" severity="info">
                                  Your BMI is in the 70th percentile
                              </Alert>
                            </Paper>
                        </Grid>
                        {addChart && (
                            <Grid item xs={12} md={8} lg={9}>
                                <div className={classes.newContainer}>
                                    <Typography className={classes.pressureTitle}>
                                        Blood Pressure
                                    </Typography>
                                    <IconButton>
                                        <AddBoxIcon className={classes.addIcon} />
                                    </IconButton>
                                </div>

                                <Chart
                                    type="line"
                                    options={options}
                                    series={series}
                                    chart={chart}
                                />
                                <Alert variant="filled" severity="info">
                                    Record your blood pressure!
                                </Alert>
                            </Grid>
                        )}
                    </Grid>

                    <Box pt={4} className={classes.footer}>
                        {/* <Copyright /> */}
                    </Box>
                </Container>
            </main>
        </div>
    );
}
