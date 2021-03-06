import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import axios from "axios";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import Dashboard from "./Dashboard";
import Objectives from "./Objectives/Objectives";
import RosterRelease from "./RosterRelease/RosterRelease";
import Help from "../components/common/Help";
import Loading from "../components/common/Loading";

import { LinkButtons, homeButton } from "../components/common";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
});

class FullWidthTabs extends React.Component {
  _isMounted = false;

  state = {
    value: 0,
    headerText: "Core Metrics",
    latencyData: "",
    trafficData: "",
    errorData: "",
    saturationData: "",
    refresh: true,
    error: "",
    auth: false
  };

  async componentDidMount() {
    this._isMounted = true;
    let accessString = localStorage.getItem("JWT");

    axios
      .get("/finduser", {
        params: {
          username: this.props.match.params.username
        },
        headers: { Authorization: `JWT ${accessString}` }
      })
      .then(response => {
        if (response.data == "jwt malformed") {
          this.setState({
            error: true
          });
        } else {
          this.setState({
            auth: response.data.auth,
            error: false
          });
        }
      })
      .catch(error => {
        console.log(error.data);
      });

    axios
      .get("https://go-server-dash.herokuapp.com/healthcheck")
      .then(res => {
        if (this._isMounted) {
          this.setState({
            latencyData: res.data.latency,
            trafficData: res.data.traffic,
            errorData: res.data.errors,
            saturationData: res.data.saturation
          });
        }
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleRefresh = () => {
    this.setState({
      refresh: false
    });
    axios
      .get("https://go-server-dash.herokuapp.com/healthcheck")
      .then(res => {
        this.setState({
          latencyData: res.data.latency,
          trafficData: res.data.traffic,
          errorData: res.data.errors,
          saturationData: res.data.saturation,
          refresh: true
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = (event, value) => {
    if (value === 1) {
      this.setState({
        value,
        headerText: "Objectives"
      });
    } else if (value === 2) {
      this.setState({
        value,
        headerText: "Roster & Releases"
      });
    } else if (value === 3) {
      this.setState({
        value,
        headerText: "Help"
      });
    } else {
      this.setState({
        value,
        headerText: "Core Metrics"
      });
    }
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div>
        <h3 className="title">{this.state.headerText}</h3>
        {this.state.error && (
          <LinkButtons
            buttonStyle={homeButton}
            buttonText={"Login to view this page"}
            link={"/"}
          />
        )}
        {!this.state.latencyData == "" && this.state.auth == true && (
          <div>
            <AppBar id="app-bar" position="static" color="default">
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Dashboard" />
                <Tab label="Objectives" />
                <Tab label="Roster & Releases" />
                <Tab label="Help" />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={this.state.value}
              onChangeIndex={this.handleChangeIndex}
            >
              <TabContainer dir={theme.direction}>
                <Dashboard
                  refresh={this.state.refresh}
                  handleRefresh={this.handleRefresh}
                  latencyData={this.state.latencyData}
                  trafficData={this.state.trafficData}
                  errorData={this.state.errorData}
                  saturationData={this.state.saturationData}
                />
              </TabContainer>
              <TabContainer dir={theme.direction}>
                <Objectives />
              </TabContainer>
              <TabContainer dir={theme.direction}>
                <RosterRelease />
              </TabContainer>
              <TabContainer dir={theme.direction}>
                <Help />
              </TabContainer>
            </SwipeableViews>
          </div>
        )}
        {this.state.latencyData == "" && <Loading />}
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    state: state
  };
}

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps)(FullWidthTabs)
);
