import React from "react";
import axios from "axios";

import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

import Release from "./Release";

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

class Releases extends React.Component {
  _isMounted = false;

  state = {
    expanded: "panel1",
    release1: "",
    release2: "",
    release3: ""
  };

  componentDidMount = () => {
    this._isMounted = true;
    axios
      .get("https://go-server-dash.herokuapp.com/releases")
      .then(res => {
        if (this._isMounted) {
          this.setState({
            release1:
              String(res.data["detail1"][0][0]) +
              " - " +
              String(res.data["team1"][0][0]),
            release2:
              String(res.data["detail2"][0][0]) +
              " - " +
              String(res.data["team2"][0][0]),
            release3:
              String(res.data["detail3"][0][0]) +
              " - " +
              String(res.data["team3"][0][0])
          });
        }
      })
      .catch(err => console.log(err));
  };

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
            <Release
              release1={this.state.release1}
              release2={this.state.release2}
              release3={this.state.release3}
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
            <Release
              release1={this.state.release1}
              release2={this.state.release2}
              release3={this.state.release3}
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
            <Release
              release1={this.state.release1}
              release2={this.state.release2}
              release3={this.state.release3}
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
            <Release
              release1={this.state.release1}
              release2={this.state.release2}
              release3={this.state.release3}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default Releases;
