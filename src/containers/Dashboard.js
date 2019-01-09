import React, { Component } from 'react';
import Latency from './Latency';

class Dashboard extends Component {
  render() {
    return (
      <div className="dash">
        <h2>Core Metrics</h2>
        <Latency />
      </div>
    );
  }
}

export default Dashboard;
