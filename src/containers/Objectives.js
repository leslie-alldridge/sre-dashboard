import React, { Component } from "react";
import ControlledOpenSelect from "./GoalsSelect";

class Objectives extends Component {
  render() {
    return (
      <div className="dash">
        <ControlledOpenSelect />
      </div>
    );
  }
}

export default Objectives;
