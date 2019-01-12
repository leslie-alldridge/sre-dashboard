import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function Help(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Dashboard
        </Typography>

        <Typography component="p">
          The Dashboard tab displays the Four Golden Signals measured against
          your SLO goals. Data is obtained from a seperate GoLang API and
          funneled into the graphs. You can refresh the Dashboard to ensure the
          most up to date information displays.
        </Typography>
        <Typography variant="h5" component="h3">
          Objectives
        </Typography>

        <Typography component="p">
          In the Objectives tab you can select and save new goals. Healthy will
          display green on the chart for all values below your goal. Low is a
          low warning and will display yellow. High warning will be red and
          gradients in between these levels will also display. Goals are saved
          to a SQL database and can be updated at any time.
        </Typography>
        <Typography variant="h5" component="h3">
          Roster & Releases
        </Typography>

        <Typography component="p">
          To the left of this page you'll see the on-call roster. This is a four
          week rotation. If you need further assistance please reach out on
          Slack. The right hand side of the page receives all of the latest Xero
          releases via the GoLang API and displays them in order of latest
          released.
        </Typography>
        <Typography variant="h5" component="h3">
          Other Requests?
        </Typography>

        <Typography component="p">
          This was created over 2 days to support my application for a role in
          SRE. I'm happy to answer any questions you may have. There were many
          features I wished to add but due to time constraints I'll have to add
          them at a later date. I learned a lot over this project and had a lot
          of fun creating this.
        </Typography>
      </Paper>
    </div>
  );
}

Help.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Help);
