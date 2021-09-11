import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { NaturePeopleTwoTone } from "@material-ui/icons";
import { mergeClasses } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  reading: {
    marginTop: '15px',
    width: '85%'
  },
  btn: {
    marginTop: '20px',
    marginLeft: '170px'
  }
}))
const Manual = ({handleClose}) => {
  var now = new Date().toISOString().slice(0, 16);

  const classes = useStyles()
  return (
    <div>
      <form noValidate>
        <TextField
          id="datetime-local"
          label="Time measured"
          type="datetime-local"
          defaultValue={now}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-basic"
          label="Reading/BPM"
          type="number"
          className={classes.reading}
        />
        <Button variant="contained" color="primary" className={classes.btn} onClick={handleClose}>
          save
        </Button>
      </form>
    </div>
  );
};

export default Manual;
