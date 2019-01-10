import React, { Component } from "react";
import ControlledOpenSelect from "./ControlledOpenSelect";

class Objectives extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Latency (ms)</label>
          <input type="number" />
          <input type="Submit" value="Save Changes" onClick={this.handleForm} />
        </form>
        <ControlledOpenSelect />
      </div>
    );
  }
}

export default Objectives;
