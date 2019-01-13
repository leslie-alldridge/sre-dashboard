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

function Release(props) {
  const { classes } = props;
  return (
    <div>
      <p>
        <b>Latest Xero Releases:</b>
      </p>
      <List component="nav" className={classes.root}>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText inset primary="Payroll Database Upgrade - Brumbies" />
        </ListItem>
        <ListItem button>
          <ListItemText inset primary="SSO Flow 20% of users - Identity" />
        </ListItem>
        <ListItem button>
          <ListItemText
            inset
            primary="Fix deployed for global search - Fringe"
          />
        </ListItem>
      </List>
    </div>
  );
}

Release.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Release);
