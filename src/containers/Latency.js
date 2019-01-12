import React, { Component } from "react";
import C3Chart from "react-c3js";
import Grid from "@material-ui/core/Grid";

class Latency extends Component {
  render() {
    const size = {
      height: 220
    };
    console.log(this.props.current);
    const data = {
      columns: [["Latency (ms)", Math.round(this.props.current)]],
      type: "gauge"
    };
    const color = {
      pattern: ["#60B044", "#F6C600", "#F97600", "#FF0000"],
      threshold: {
        unit: "value", // percentage is default
        //            max: 200, // 100 is default
        values: [
          this.props.goalData[0].healthy,
          this.props.goalData[0].low,
          this.props.goalData[0].high
        ]
      }
    };

    const gauge = {
      max: 200, // 100 is default,
      label: {
        format: function(value, ratio) {
          return value;
        },
        show: false // to turn off the min/max labels.
      },
      values: [
        this.props.goalData[0].healthy,
        this.props.goalData[0].low,
        this.props.goalData[0].high
      ],
      units: "value"
    };
    return (
      <Grid item xs={6}>
        <div id="chartBG">
          <p className="gaugeTitle">Latency (last 60mins)</p>
          <C3Chart data={data} gauge={gauge} color={color} size={size} />
        </div>
      </Grid>
    );
  }
}

export default Latency;
