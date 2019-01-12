import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function ListPanel(props) {
  const { classes } = props;
  return (
    <div>
      <p>
        <b>Current on call and backup:</b>
      </p>

      <List component="nav" className={classes.root}>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText inset primary="A great Xero 9am - 9pm NZT" />
        </ListItem>
        <ListItem button>
          <ListItemText inset primary="A fellow Xero 10am - 3pm NZT" />
        </ListItem>
      </List>
    </div>
  );
}

ListPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListPanel);
