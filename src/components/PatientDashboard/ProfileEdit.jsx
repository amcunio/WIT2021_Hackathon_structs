import React from 'react'
import { DialogContent, DialogTitle } from "@material-ui/core"
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  dob: {
    display: "flex",
  },
  dobText: {
    paddingTop: "9px",
    fontSize: "18px",
    marginRight: "22px",
    color: "#3e50b5",
    fontWeight: "bold",
    fontFamily: "comfortaa",
  },
  gender: {
    display: "flex",
    paddingTop: "10px",
  },
  genderText: {
    paddingTop: "9px",
    fontSize: "18px",
    marginRight: "10px",
    color: "#3e50b5",
    fontWeight: "bold",
    fontFamily: "comfortaa",
  },
}));

const ProfileEdit = ({ handleClose }) => {
    const classes = useStyles()

    const [gender, setGender] = React.useState('20')

    const handleChange = (event) => {
      setGender(event.target.value);
    };

    return (
      <>
        <DialogTitle onClose={handleClose}>Profile</DialogTitle>
        <DialogContent dividers>
          <div className={classes.dob}>
            <span className={classes.dobText}>D.O.B.</span>
            <form noValidate>
              <TextField
                id="date"
                type="date"
                defaultValue="1993-05-24"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </div>
          <div className={classes.gender}>
            <span className={classes.genderText}>Gender</span>
            <FormControl className={classes.formControl}>
              <Select
                value={gender}
                onChange={handleChange}
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
              </Select>
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </>
    );
}

export default ProfileEdit