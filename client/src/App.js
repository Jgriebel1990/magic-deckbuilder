import React, { Component } from "react";
import fb from "./firebase-app";
import "./App.css";
//Components
import Library from './Library';

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      uid: ""
    };
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleSignup(e) {
    e.preventDefault();
    fb.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(response => {
        this.setState({
          email: response.email,
          uid: response.uid
        })
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleLogin(e) {
    e.preventDefault();
    fb.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(response => {
        this.setState({
          email: response.email,
          uid: response.uid
        });
      })
      .catch(function(error) {});
  }
  render() {
    if(this.state.uid){
      return <Library />
    }else {
      null
    };
    return (
      <div>
        <h1>Magic the Gathering Deckbuilder</h1>
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
        <form onSubmit={this.handleLogin}>
          <h2>Sign in</h2>
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
          <button onSubmit={this.handleLogin}>Login</button>
        </form>
      </div>
    );
  }
}

export default App;
