import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import Grid from '@material-ui/core/Grid';

const data = {
  columns: [['Saturation (ms)', 34.5]],
  type: 'gauge'
};

const size = {
  height: 220
};

const color = {
  pattern: ['#60B044', '#F6C600', '#F97600', '#FF0000'],
  threshold: {
    unit: 'value', // percentage is default
    //            max: 200, // 100 is default
    values: [90, 100, 150, 180]
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
  values: [30, 60, 90, 100],
  units: 'value'
};

// const style = {
//   fontSize: '3em'
// };

class Saturation extends Component {
  render() {
    return (
      <Grid item xs={6}>
        <div id="chartBG">
          <p class="gaugeTitle">Saturation (last 60mins)</p>
          <C3Chart
            data={data}
            gauge={gauge}
            color={color}
            size={size}
            // style={style}
          />
        </div>
      </Grid>
    );
  }
}

export default Saturation;
