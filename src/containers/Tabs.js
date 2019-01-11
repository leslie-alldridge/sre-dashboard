import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Dashboard from "./Dashboard";
import Objectives from "./Objectives";

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
  state = {
    value: 0,
    headerText: "Core Metrics"
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
        headerText: "On Call Roster"
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
      <React.Fragment>
        <h3 className="title">Monitoring Service - {this.state.headerText}</h3>
        <div>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Dashboard" />
              <Tab label="Objectives" />
              <Tab label="Roster" />
              <Tab label="Help" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer dir={theme.direction}>
              <Dashboard />
            </TabContainer>
            <TabContainer dir={theme.direction}>
              <Objectives />
            </TabContainer>
            <TabContainer dir={theme.direction}>Item Three</TabContainer>
            <TabContainer dir={theme.direction}>content</TabContainer>
            <TabContainer dir={theme.direction}>content 2</TabContainer>
          </SwipeableViews>
        </div>
      </React.Fragment>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
