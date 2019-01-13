import React from "react";
import axios from "axios";

import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

import ListPanel from "./List";

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0,0,0,.125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    }
  },
  expanded: {
    margin: "auto"
  }
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0,0,0,.03)",
    borderBottom: "1px solid rgba(0,0,0,.125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = "ExpansionPanelSummary";

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2
  }
}))(MuiExpansionPanelDetails);

class Roster extends React.Component {
  _isMounted = false;

  state = {
    expanded: "panel1",
    rosterData: ""
  };

  componentDidMount = () => {
    this._isMounted = true;
    axios
      .get("https://go-server-dash.herokuapp.com/roster")
      .then(res => {
        if (this._isMounted) {
          this.setState({
            rosterData:
              String(res.data["roster"][0][0]) +
              " " +
              String(res.data["time1"][0][0]),
            rosterData2:
              String(res.data["roster2"][0][0]) +
              " " +
              String(res.data["time2"][0][0])
          });
        }
      })
      .catch(err => console.log(err));
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { expanded } = this.state;
    return (
      <div id="roster-panel">
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary>
            <Typography>Week #1</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ListPanel
              data={this.state.rosterData}
              data2={this.state.rosterData2}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary>
            <Typography>Week #2</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ListPanel
              data={this.state.rosterData}
              data2={this.state.rosterData2}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
        >
          <ExpansionPanelSummary>
            <Typography>Week #3</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ListPanel
              data={this.state.rosterData}
              data2={this.state.rosterData2}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={this.handleChange("panel4")}
        >
          <ExpansionPanelSummary>
            <Typography>Week #4</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ListPanel
              data={this.state.rosterData}
              data2={this.state.rosterData2}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default Roster;
