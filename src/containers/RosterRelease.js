import React, { Component } from "react";
import Roster from "./Roster";
class RosterRelease extends Component {
  render() {
    return (
      <div>
        <div id="roster-release">
          <p className="roster-title">Weekly On Call Roster</p>
          <p id="roster-title-2">Latest Releases</p>
        </div>
        <div id="roster-release">
          <Roster />
          <Roster />
        </div>
      </div>
    );
  }
}

export default RosterRelease;
