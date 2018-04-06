import React, { Component } from "react";
import { Link } from "react-router-dom";
import fb from "./firebase-app";
import Library from './Library';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      uid: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    fb
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(response => {
        this.setState({
          email: response.email,
          uid: response.uid,
          password: ""
        });
      })
      .catch(function(error) {});
  }

  handleLogout(e) {
    e.preventDefault();
    fb
      .auth()
      .signOut()
      .then(response => {
        this.setState({
          email: "",
          uid: ""
        });
      });
  }
  render() {
    if (this.state.uid) {
      return <Library />;
    } else {
      null;
    }
    return (
      <div>
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
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Login;
