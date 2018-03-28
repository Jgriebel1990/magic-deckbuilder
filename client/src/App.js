import React, { Component } from "react";
import fb from "./firebase-app";
import "./App.css";
//Components
import SearchBar from './SearchBar';
import Login from './Login';
import Signup from './Signup'

class App extends Component {
  render() {
    return (
      <div>
        <Signup />
        <SearchBar />
        
      </div>
    );
  }
}

export default App;
