import React, { Component } from "react";
import { Link } from "react-router-dom";
import fb from "./firebase-app";
import Library from "./Library";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    fb
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.history.push("/library"))
      .catch(function(error) {});
  }

  render() {
    return (
      <div className="container d-flex">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={this.handleLogin}>
              <h2>Login</h2>
              <input
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
