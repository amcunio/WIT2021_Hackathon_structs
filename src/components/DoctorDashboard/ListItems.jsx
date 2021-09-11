import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import faker from "faker";

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

export const mainListItems = (
    <div>
        {[...Array(12).keys()].map(i => (
            <User key={i} name={faker.name.findName()} avatar={faker.image.avatar()} />
        ))}
    </div>
);
