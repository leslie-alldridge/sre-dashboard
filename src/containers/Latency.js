import React, { Component } from 'react';
import C3Chart from 'react-c3js';

const data = {
  columns: [['Latency (ms)', 87]],
  type: 'gauge'
};

const size = {
  height: 180
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
  max: 200, // 100 is default,
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

class Latency extends Component {
  render() {
    return (
      <div id="chartBG">
        <C3Chart
          data={data}
          gauge={gauge}
          color={color}
          size={size}
          // style={style}
        />
      </div>
    );
  }
}

export default Latency;
