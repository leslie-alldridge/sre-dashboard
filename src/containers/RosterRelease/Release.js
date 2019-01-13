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
          <ListItemText inset primary={props.release1} />
        </ListItem>
        <ListItem button>
          <ListItemText inset primary={props.release2} />
        </ListItem>
        <ListItem button>
          <ListItemText inset primary={props.release3} />
        </ListItem>
      </List>
    </div>
  );
}

Release.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Release);
