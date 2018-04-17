import React, { Component } from "react";
import { Link } from "react-router-dom";
import fb from "./firebase-app";
import Login from "./Login";
import "./CSS/signup.css";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(e) {
    e.preventDefault();
    fb
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="container d-flex">
        <div className="row">
          <div className='col-md-6'>
            <form onSubmit={this.handleSignup}>
              <h2 className='signup-form--text'>Signup</h2>
              <input
                className='form'
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <input
                className='form'
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
              <button className='signup-form--btn'>Signup</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
