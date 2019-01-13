import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Goals from "./Goals";
import { getGoalsAction, saveGoalsAction } from "../../actions/goals";

const styles = theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

class ControlledOpenSelect extends Component {
  state = {
    area: "",
    open: false
  };

  componentDidMount = () => {
    this.props.getGoals();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <div id="goal-form">
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Area</InputLabel>
            <Select
              open={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.area}
              onChange={this.handleChange}
              inputProps={{
                name: "area",
                id: "demo-controlled-open-select"
              }}
            >
              <MenuItem value={"Latency"}>Latency</MenuItem>
              <MenuItem value={"Traffic"}>Traffic</MenuItem>
              <MenuItem value={"Errors"}>Errors</MenuItem>
              <MenuItem value={"Saturation"}>Saturation</MenuItem>
            </Select>
          </FormControl>
        </form>
        {this.state.area == "Latency" ? (
          <Goals
            func={this.props.saveGoals}
            data={this.props.state.goals}
            target="Latency"
          />
        ) : this.state.area == "Traffic" ? (
          <Goals
            func={this.props.saveGoals}
            data={this.props.state.goals}
            target="Traffic"
          />
        ) : this.state.area == "Errors" ? (
          <Goals
            func={this.props.saveGoals}
            data={this.props.state.goals}
            target="Errors"
          />
        ) : this.state.area == "Saturation" ? (
          <Goals
            func={this.props.saveGoals}
            data={this.props.state.goals}
            target="Saturation"
          />
        ) : (
          <Goals target="Please select an area above" />
        )}
      </div>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGoals: () => {
      dispatch(getGoalsAction());
    },
    saveGoals: (area, section, value) => {
      dispatch(saveGoalsAction(area, section, value));
    }
  };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ControlledOpenSelect)
);
