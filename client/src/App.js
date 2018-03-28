import React, { Component } from "react";
import fb from "./firebase-app";
import "./App.css";
//Components
import Library from './Library';
import Login from './Login';
import Signup from './Signup'

class App extends Component {
  render() {
    return (
      <div>
        <Signup />
        <Login />
      </div>
    );
  }
}

export default App;
