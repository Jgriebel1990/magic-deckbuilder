import React, { Component } from "react";
import { Link } from 'react-router-dom';
import fb from "./firebase-app";
import Login from './Login'

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      uid: ""
    };
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(e) {
    e.preventDefault();
    fb
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(response => {
        this.setState({
          email: response.email,
          uid: response.uid
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSignup}>
          <h2>Signup</h2>
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
          <button onSubmit={this.handleSignup}>Signup</button>
        </form>
      </div>
    );
  }
}

export default Signup;
