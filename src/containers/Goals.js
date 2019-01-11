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
    currentInput: ""
  };
  handleEdit = name => {
    console.log(name);
    this.setState({
      editView: name
    });
  };

  handleSave = name => {
    console.log(name);
    this.setState({
      editView: ""
    });
    //dispatch current input from state to redux
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
                  <CustomTableCell>{this.props.target}</CustomTableCell>
                  <CustomTableCell align="right">Healthy</CustomTableCell>
                  <CustomTableCell align="right">Low Alert</CustomTableCell>
                  <CustomTableCell align="right">High Alert</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className={classes.row}>
                  <CustomTableCell component="th" scope="row">
                    test
                  </CustomTableCell>
                  <CustomTableCell align="right">
                    {this.state.editView !== "healthy" ? (
                      230
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
                    <EditIcon
                      name="healthy"
                      onClick={() => {
                        this.handleEdit("healthy");
                      }}
                      id="edit-icon"
                    />
                  </CustomTableCell>
                  <CustomTableCell align="right">22</CustomTableCell>
                  <CustomTableCell align="right">23</CustomTableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Goals);
