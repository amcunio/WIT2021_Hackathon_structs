import { DialogContent, DialogTitle } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  param: {
    display: "flex",
    paddingTop: "10px",
  },
  paramText: {
    paddingTop: "9px",
    fontSize: "18px",
    marginRight: "10px",
    color: "#3e50b5",
    fontWeight: "bold",
    fontFamily: "comfortaa",
  },
  formControl: {
    width: '200px'
  },
  btn: {
    marginTop: '20px'
  }
}));

const NewParam = ({ handleClose, setAddChart }) => {
  const classes = useStyles()
  const [param, setParam] = React.useState('')

  const handleChange = (event) => {
    setParam(event.target.value);
  };

  const handleSubmit = () => {
    handleClose(false)
    setAddChart(true)
  }
  return (
    <div>
      <DialogTitle onClose={handleClose}>New Health Parameter</DialogTitle>
      <DialogContent dividers>
        <div className={classes.paramText}>Parameters</div>
        <FormControl className={classes.formControl}>
          <Select value={param} onChange={handleChange}>
            <MenuItem value={10}>Blood pressure</MenuItem>
            <MenuItem value={20}>Blood oxygen level</MenuItem>
          </Select>
          <Button color="primary" variant="contained" className={classes.btn} onClick={handleSubmit}>
            ADD
          </Button>
        </FormControl>
      </DialogContent>
    </div>
  );
};

export default NewParam;
