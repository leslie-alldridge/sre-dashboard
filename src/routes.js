import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import Register from "./containers/Users/Register";
import Login from "./containers/Users/Login";
import Profile from "./containers/Users/Profile";
import UpdateProfile from "./containers/Users/UpdateProfile";
import ForgotPassword from "./containers/Users/ForgotPassword";
import ResetPassword from "./containers/Users/ResetPassword";
import UpdatePassword from "./containers/Users/UpdatePassword";
import FullWidthTabs from "./containers/Tabs";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={FullWidthTabs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset/:token" component={ResetPassword} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/userProfile/:username" component={Profile} />
          <Route exact path="/updateUser/:username" component={UpdateProfile} />
          <Route
            exact
            path="/updatePassword/:username"
            component={UpdatePassword}
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;
