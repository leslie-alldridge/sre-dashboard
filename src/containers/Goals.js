import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

class Goals extends Component {
  state = {
    editView: "",
    currentInput: 0,
    width: 0
  };

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWindowDimensions);
  };

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  handleEdit = name => {
    console.log(name);
    this.setState({
      editView: name
    });
  };

  handleSave = name => {
    console.log(name);
    if (this.state.currentInput !== 0) {
      this.props.func(this.props.target, name, this.state.currentInput);
    } else {
      alert("Please enter a number value above zero");
    }

    this.setState({
      editView: "",
      currentInput: 0
    });
  };

  handleInputChange = e => {
    console.log(e.target.value);
    this.setState({
      currentInput: e.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <p id="goal-text">
          {this.props.target == "Please select an area above"
            ? this.props.target
            : `View and Edit Goals for ${this.props.target} below`}
        </p>
        {this.props.target !== "Please select an area above" && (
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>
                    Area {this.state.width <= 700 && "(Swipe Right for more..)"}
                  </CustomTableCell>
                  <CustomTableCell align="right">Healthy</CustomTableCell>
                  <CustomTableCell align="right">Low Alert</CustomTableCell>
                  <CustomTableCell align="right">High Alert</CustomTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {this.props.data.isFetching !== true &&
                  this.props.data.goals.map(cell => {
                    if (cell.area === this.props.target) {
                      return (
                        <TableRow key={cell.area} className={classes.row}>
                          <CustomTableCell component="th" scope="row">
                            {cell.area}
                          </CustomTableCell>
                          <CustomTableCell align="right">
                            {this.state.editView !== "healthy" ? (
                              <React.Fragment>
                                {cell.healthy}{" "}
                                <EditIcon
                                  name="healthy"
                                  onClick={() => {
                                    this.handleEdit("healthy");
                                  }}
                                  id="edit-icon"
                                />{" "}
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                <input
                                  onChange={this.handleInputChange}
                                  type="number"
                                />
                                <SaveIcon
                                  name="healthy"
                                  onClick={() => {
                                    this.handleSave("healthy");
                                  }}
                                  id="save-icon"
                                />
                              </React.Fragment>
                            )}
                          </CustomTableCell>
                          <CustomTableCell align="right">
                            {this.state.editView !== "low" ? (
                              <React.Fragment>
                                {cell.low}{" "}
                                <EditIcon
                                  name="low"
                                  onClick={() => {
                                    this.handleEdit("low");
                                  }}
                                  id="edit-icon"
                                />{" "}
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                <input
                                  onChange={this.handleInputChange}
                                  type="number"
                                />
                                <SaveIcon
                                  name="low"
                                  onClick={() => {
                                    this.handleSave("low");
                                  }}
                                  id="save-icon"
                                />
                              </React.Fragment>
                            )}
                          </CustomTableCell>
                          <CustomTableCell align="right">
                            {this.state.editView !== "high" ? (
                              <React.Fragment>
                                {cell.high}{" "}
                                <EditIcon
                                  name="high"
                                  onClick={() => {
                                    this.handleEdit("high");
                                  }}
                                  id="edit-icon"
                                />{" "}
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                <input
                                  onChange={this.handleInputChange}
                                  type="number"
                                />
                                <SaveIcon
                                  name="high"
                                  onClick={() => {
                                    this.handleSave("high");
                                  }}
                                  id="save-icon"
                                />
                              </React.Fragment>
                            )}
                          </CustomTableCell>
                        </TableRow>
                      );
                    }
                  })}
              </TableBody>
            </Table>
          </Paper>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Goals);
