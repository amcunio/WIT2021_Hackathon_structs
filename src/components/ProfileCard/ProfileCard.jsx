import React from 'react'
import Typography from "@material-ui/core/Typography"
import ella from '../../assets/ella.png';
import { Avatar, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  avatar: {
    border: '1px solid rgba(0,0,0,0.15)',
    margin: '0 auto',
    marginTop: '1rem',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function ProfileCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="ella green" src={ella} className={classes.avatar}>E</Avatar>
      <List>
        <ListItem>
          <ListItemText>
            <Typography>Name: <span>Ella Green</span></Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography>Age: <span>40</span></Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography>Birthday: <span>December 13, 1981</span></Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography>Gender: <span>Femal</span></Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography>Phone: <span>(07) 3014 8409</span></Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography>Email: <span>ellag@medtrix.com</span></Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography>QR Code: <a href="" >Click to view the patient's QR code</a></Typography>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  )
}

export default React.memo(ProfileCard)
