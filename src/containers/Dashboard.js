import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Autorenew from "@material-ui/icons/Autorenew";

import Latency from "./Latency";
import Traffic from "./Traffic";
import Errors from "./Errors";
import Saturation from "./Saturation";

import Loading from "./Loading";

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
  componentDidMount = () => {
    // axios.get("http://localhost:4000/healthcheck").then(res => {
    //   this.setState({
    //     latencyData: res.data.latency,
    //     trafficData: res.data.traffic,
    //     errorData: res.data.errors,
    //     saturationData: res.data.saturation
    //   });
    // });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        {this.props.state.goals.isFetching == true && <Loading />}
        {!this.props.state.goals.isFetching && (
          <div className="dash">
            <div className={classes.root}>
              <Grid container spacing={24}>
                <Latency
                  current={this.props.latencyData}
                  goalData={this.props.state.goals.goals}
                />
                <Traffic
                  current={this.props.trafficData}
                  goalData={this.props.state.goals.goals}
                />
                <Errors
                  current={this.props.errorData}
                  goalData={this.props.state.goals.goals}
                />
                <Saturation
                  current={this.props.saturationData}
                  goalData={this.props.state.goals.goals}
                />
              </Grid>
            </div>
          </div>
        )}

        <Button
          id="refresh-button"
          variant="contained"
          className={classes.button}
          onClick={this.props.handleRefresh}
        >
          <Autorenew className={classes.extendedIcon} />
          Refresh
        </Button>
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
