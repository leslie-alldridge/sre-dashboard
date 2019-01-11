import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Autorenew from "@material-ui/icons/Autorenew";

import Latency from "./Latency";
import Traffic from "./Traffic";
import Errors from "./Errors";
import Saturation from "./Saturation";

const styles = theme => ({
  root: {
    display: "flex",
    padding: "15px"
  },
  button: {
    margin: theme.spacing.unit,
    fontWeight: 500
  },
  extendedIcon: {
    marginRight: "10px",
    fontWeight: 900
  }
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className="dash">
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Latency />
              <Traffic />
              <Errors />
              <Saturation />
            </Grid>
          </div>
        </div>

        <Button
          id="refresh-button"
          variant="contained"
          className={classes.button}
        >
          <Autorenew className={classes.extendedIcon} />
          Refresh
        </Button>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
