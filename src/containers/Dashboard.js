import React, { Component } from "react";
import { connect } from "react-redux";

import TimeAgo from "react-timeago";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Autorenew from "@material-ui/icons/Autorenew";

import Latency from "./Charts/Latency";
import Traffic from "./Charts/Traffic";
import Errors from "./Charts/Errors";
import Saturation from "./Charts/Saturation";
import Loading from "../components/Loading";

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
  state = {
    latencyData: "",
    trafficData: "",
    errorData: "",
    saturationData: ""
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.props.state.goals.isFetching == true && <Loading />}
        {!this.props.state.goals.isFetching && (
          <div className="dash">
            <div className={classes.root}>
              <Grid id="grid-dash" container spacing={24}>
                {this.props.state.goals.goals.map(goal => {
                  console.log(goal);

                  if (goal.area == "Latency") {
                    return (
                      <Latency
                        current={this.props.latencyData}
                        goalData={goal}
                      />
                    );
                  } else if (goal.area == "Traffic") {
                    return (
                      <Traffic
                        current={this.props.trafficData}
                        goalData={goal}
                      />
                    );
                  } else if (goal.area == "Errors") {
                    return (
                      <Errors current={this.props.errorData} goalData={goal} />
                    );
                  } else if (goal.area == "Saturation") {
                    return (
                      <Saturation
                        current={this.props.saturationData}
                        goalData={goal}
                      />
                    );
                  }
                })}

                {/* <Errors
                  current={this.props.errorData}
                  goalData={this.props.state.goals.goals}
                />
                <Saturation
                  current={this.props.saturationData}
                  goalData={this.props.state.goals.goals}
                /> */}
              </Grid>
            </div>
            <br />
          </div>
        )}
        {this.props.refresh && (
          <Button
            id="refresh-button"
            variant="contained"
            className={classes.button}
            onClick={this.props.handleRefresh}
          >
            <Autorenew className={classes.extendedIcon} />
            Refresh
          </Button>
        )}
        {!this.props.refresh && (
          <p id="loading-refresh">
            <i>Retrieving information...</i>
          </p>
        )}
        <br />
        <span>
          <i id="update-time">
            Last updated: <TimeAgo date={Date.now()} />
          </i>
        </span>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps)(Dashboard)
);
