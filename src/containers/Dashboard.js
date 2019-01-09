import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Latency from './Latency';
import Traffic from './Traffic';
import Errors from './Errors';
import Saturation from './Saturation';

const styles = theme => ({
  root: {
    display: 'flex',
    padding: '15px'
  }
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="dash">
        <h2>Core Metrics</h2>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Latency />
            <Traffic />
            <Errors />
            <Saturation />
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
