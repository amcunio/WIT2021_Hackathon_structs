import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { alpha, makeStyles } from '@material-ui/core/styles';
import faker from "faker";
import AddIcon from '@material-ui/icons/Add';
import ella from '../../assets/ella.png';

const useStyles = makeStyles(theme => ({
    searchItem: {
        justifyContent: "center",
        overflow: "hidden",
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.black, 0.25),
        },
        marginLeft: 0,
        minWidth: '0',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: '16px',
        transition: theme.transitions.create('width'),
        width: '100%',
      },
}))

const User = ({ name, avatar }) => {
    return (
        <ListItem button>
            <ListItemAvatar>
                <Avatar alt={name} src={avatar} />
            </ListItemAvatar>
            <ListItemText
                primary={name}
            />
        </ListItem>
    )
}

export const MainListItems = React.memo(() => {
    const classes = useStyles();
    return (
        <div>
            <ListItem className={classes.searchItem}>
                <ListItemAvatar>
                    <Avatar>
                        <SearchIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText>
                    <div className={classes.search}>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </ListItemText>
            </ListItem>

            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt="Ella" src={ella} />
                </ListItemAvatar>
                <ListItemText
                    primary="Ella Green"
                />
            </ListItem>
            {[...Array(12).keys()].map(i => (
                <User key={i} name={faker.name.findName()} avatar={faker.image.avatar()} />
            ))}
            <ListItem button className={classes.addNew}>
                <ListItemAvatar>
                    <Avatar alt="" src="">
                        <AddIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Add a new patient"
                />
            </ListItem>
        </div>
)});
