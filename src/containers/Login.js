import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import TextField from "@material-ui/core/TextField";

import {
  LinkButtons,
  SubmitButtons,
  registerButton,
  homeButton,
  loginButton,
  forgotButton,
  inputStyle,
  HeaderBar
} from "../components";

const title = {
  pageTitle: "Login Screen"
};

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      loggedIn: false,
      showError: false,
      showNullError: false
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  loginUser = e => {
    e.preventDefault();
    if (this.state.username === "" || this.state.password === "") {
      this.setState({
        showError: false,
        showNullError: true,
        loggedIn: false
      });
    } else {
      axios
        .post("/login", {
          username: this.state.username,
          password: this.state.password
        })
        .then(response => {
          if (
            response.data === "bad username" ||
            response.data === "passwords do not match"
          ) {
            this.setState({
              showError: true,
              showNullError: false
            });
          } else {
            localStorage.setItem("JWT", response.data.token);
            this.setState({
              loggedIn: true,
              showError: false,
              showENullrror: false
            });
          }
        })
        .catch(error => {
          console.log(error.data);
        });
    }
  };

  render() {
    const {
      username,
      password,
      showError,
      loggedIn,
      showNullError
    } = this.state;
    if (!loggedIn) {
      return (
        <div>
          <HeaderBar title={title} />
          <form className="profile-form" onSubmit={this.loginUser}>
            <TextField
              style={inputStyle}
              id="username"
              label="username"
              value={username}
              onChange={this.handleChange("username")}
              placeholder="Username"
            />
            <TextField
              style={inputStyle}
              id="password"
              label="password"
              value={password}
              onChange={this.handleChange("password")}
              placeholder="Password"
              type="password"
            />
            <SubmitButtons buttonStyle={loginButton} buttonText={"Login"} />
          </form>
          {showNullError && (
            <div>
              <p>The username or password cannot be null.</p>
            </div>
          )}
          {showError && (
            <div>
              <p>
                That username or password isn't recognized. Please try again or
                register now.
              </p>
              <LinkButtons
                buttonText={`Register`}
                buttonStyle={registerButton}
                link={"/register"}
              />
            </div>
          )}
          <LinkButtons
            buttonText={`Go Home`}
            buttonStyle={homeButton}
            link={"/"}
          />
          <LinkButtons
            buttonStyle={forgotButton}
            buttonText={"Forgot Password?"}
            link={"/forgotPassword"}
          />
        </div>
      );
    } else {
      return <Redirect to={`/userProfile/${username}`} />;
    }
  }
}
export default Login;
