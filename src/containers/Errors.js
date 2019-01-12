import React, { Component } from "react";
import C3Chart from "react-c3js";
import Grid from "@material-ui/core/Grid";

const data = {
  columns: [["Errors %", 1.89]],
  type: "gauge"
};

const size = {
  height: 220
};

const color = {
  pattern: ["#60B044", "#F6C600", "#F97600", "#FF0000"],
  threshold: {
    //            max: 200, // 100 is default
    values: [90, 100, 150, 180]
  }
};

const gauge = {
  max: 5, // 100 is default,
  label: {
    format: function(value, ratio) {
      return value;
    },
    show: false // to turn off the min/max labels.
  },
  values: [30, 60, 90, 100]
};

// const style = {
//   fontSize: '3em'
// };

class Errors extends Component {
  render() {
    const size = {
      height: 220
    };
    console.log(this.props.current);
    const data = {
      columns: [["Errors %", this.props.current]],
      type: "gauge"
    };
    const color = {
      pattern: ["#60B044", "#F6C600", "#F97600", "#FF0000"],
      threshold: {
        unit: "value", // percentage is default
        //            max: 200, // 100 is default
        values: [
          this.props.goalData[2].healthy,
          this.props.goalData[2].low,
          this.props.goalData[2].high
        ]
      }
    };

    const gauge = {
      max: 5, // 100 is default,
      label: {
        format: function(value, ratio) {
          return value;
        },
        show: false // to turn off the min/max labels.
      },
      values: [
        this.props.goalData[2].healthy,
        this.props.goalData[2].low,
        this.props.goalData[2].high
      ],
      units: "value"
    };
    return (
      <Grid item xs={6}>
        <div id="chartBG">
          <p className="gaugeTitle">Errors (last 10mins)</p>
          <C3Chart
            data={data}
            gauge={gauge}
            color={color}
            size={size}
            // style={style}
          />
        </div>
        <br />
        <br />
      </Grid>
    );
  }
}

export default Errors;
