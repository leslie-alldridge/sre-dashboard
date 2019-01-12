import React, { Component } from "react";

import Roster from "./Roster";
import Releases from "./Releases";

class RosterRelease extends Component {
  render() {
    return (
      <div id="roster-release">
        <div id="roster">
          <p className="roster-title">Weekly On Call Roster</p>
          <Roster />
        </div>
        <div id="roster">
          <p className="roster-title">Latest Releases</p>
          <Releases />
        </div>
      </div>
    );
  }
}

export default RosterRelease;
