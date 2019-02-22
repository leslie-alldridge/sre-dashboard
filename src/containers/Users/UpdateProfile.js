import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import TextField from "@material-ui/core/TextField";

import {
  LinkButtons,
  SubmitButtons,
  HeaderBar,
  homeButton,
  cancelButton,
  saveButton,
  loginButton,
  inputStyle
} from "../../components/common";

const loading = {
  margin: "1em",
  fontSize: "24px"
};

const title = {
  pageTitle: "Update User Profile Screen"
};

class UpdateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      loadingUser: false,
      updated: false,
      error: false
    };
  }

  componentDidMount() {
    this.setState({ loadingUser: true });

    let accessString = localStorage.getItem("JWT");
    if (accessString === null) {
      this.setState({
        loadingUser: false,
        error: true
      });
    }

    axios
      .get("/finduser", {
        params: {
          username: this.props.match.params.username
        },
        headers: { Authorization: `JWT ${accessString}` }
      })
      .then(response => {
        this.setState({
          loadingUser: false,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          username: response.data.username,
          password: response.data.password,
          error: false
        });
      })
      .catch(error => {
        console.log(error.data);
      });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  updateUser = e => {
    let accessString = localStorage.getItem("JWT");
    if (accessString === null) {
      this.setState({
        loadingUser: false,
        error: true
      });
    }

    e.preventDefault();
    axios
      .put(
        "/updateuser",
        {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          username: this.state.username
        },
        {
          headers: { Authorization: `JWT ${accessString}` }
        }
      )
      .then(response => {
        this.setState({
          updated: true,
          error: false
        });
      })
      .catch(error => {
        console.log(error.data);
      });
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      username,
      password,
      updated,
      error,
      loadingUser
    } = this.state;

    if (error) {
      return (
        <div id="user-bg">
          <HeaderBar title={title} />
          <p style={loading}>
            There was a problem accessing your data. Please go login again.
          </p>
          <LinkButtons
            style={loginButton}
            buttonText={"Go Login"}
            link="/login"
          />
        </div>
      );
    } else if (loadingUser !== false) {
      return (
        <div id="user-bg">
          <HeaderBar title={title} />
          <p style={loading}>Loading user data...</p>
        </div>
      );
    } else if (loadingUser === false && updated === true) {
      return <Redirect to={`/userProfile/${username}`} />;
    } else if (loadingUser === false) {
      return (
        <div id="user-bg">
          <HeaderBar title={title} />
          <form className="profile-form" onSubmit={this.updateUser}>
            <TextField
              style={inputStyle}
              id="first_name"
              label="first_name"
              value={first_name}
              onChange={this.handleChange("first_name")}
              placeholder="First Name"
            />
            <TextField
              style={inputStyle}
              id="last_name"
              label="last_name"
              value={last_name}
              onChange={this.handleChange("last_name")}
              placeholder="Last Name"
            />
            <TextField
              style={inputStyle}
              id="email"
              label="email"
              value={email}
              onChange={this.handleChange("email")}
              placeholder="Email"
            />
            <TextField
              style={inputStyle}
              id="username"
              label="username"
              value={username}
              readOnly
              disabled
            />
            <TextField
              style={inputStyle}
              id="password"
              label="password"
              value={password}
              readOnly
              disabled
              type="password"
            />
            <SubmitButtons
              buttonStyle={saveButton}
              buttonText={"Save Changes"}
            />
          </form>
          <LinkButtons
            buttonStyle={homeButton}
            buttonText={"Go Home"}
            link={"/"}
          />
          <LinkButtons
            buttonStyle={cancelButton}
            buttonText={"Cancel Changes"}
            link={`/userProfile/${username}`}
          />
        </div>
      );
    }
  }
}

export default UpdateProfile;
