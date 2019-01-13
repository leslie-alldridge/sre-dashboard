import React, { Component } from "react";
import C3Chart from "react-c3js";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",

    // marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    marginTop: "3px"
  },
  table: {
    minWidth: 700,
    maxHeight: 220,
    marginTop: "5px"
  }
});

// const style = {
//   fontSize: '3em'
// };

class Saturation extends Component {
  state = {
    clicked: false,
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
  onClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };
  render() {
    const { classes } = this.props;

    const size = {
      height: 220
    };
    console.log(this.props.current);
    const data = {
      columns: [["Saturation (ms)", this.props.current.toFixed(2)]],
      type: "gauge"
    };
    const color = {
      pattern: ["#60B044", "#F6C600", "#F97600", "#FF0000"],
      threshold: {
        unit: "value", // percentage is default
        //            max: 200, // 100 is default
        values: [
          this.props.goalData[3].healthy,
          this.props.goalData[3].low,
          this.props.goalData[3].high
        ]
      }
    };

    const gauge = {
      max: 100, // 100 is default,
      label: {
        format: function(value, ratio) {
          return value;
        },
        show: false // to turn off the min/max labels.
      },
      values: [
        this.props.goalData[3].healthy,
        this.props.goalData[3].low,
        this.props.goalData[3].high
      ],
      units: "value"
    };
    return (
      <Grid id="test2" item xs={6}>
        <div className="animated fadeIn" onClick={this.onClick} id="chartBG">
          {!this.state.clicked && (
            <React.Fragment>
              <p className="gaugeTitle">Saturation (last 60mins</p>
              <C3Chart data={data} gauge={gauge} color={color} size={size} />
            </React.Fragment>
          )}
          {this.state.clicked && (
            <div className="animated fadeIn">
              {/* <p className="ninety-title">99th Percentile</p> */}
              <hr />
              <span className="ninety-title">99th Percentile</span>

              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        URL{" "}
                        {this.state.width <= 700 && "(Swipe Right for more..)"}
                      </TableCell>
                      <TableCell align="right">Traffic</TableCell>
                      <TableCell align="right">Count</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        payroll.xero.com
                      </TableCell>
                      <TableCell align="right">150k</TableCell>
                      <TableCell align="right">200</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        projects.xero.com
                      </TableCell>
                      <TableCell align="right">120k</TableCell>
                      <TableCell align="right">102</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        go.xero.com/Bank/BankRec.aspx
                      </TableCell>
                      <TableCell align="right">105k</TableCell>
                      <TableCell align="right">45</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        go.xero.com/AccountsReceivable
                      </TableCell>
                      <TableCell align="right">90k</TableCell>
                      <TableCell align="right">21</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </div>
          )}
        </div>
      </Grid>
    );
  }
}
Saturation.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Saturation);
