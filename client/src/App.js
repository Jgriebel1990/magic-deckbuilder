import React, { Component } from "react";
import fb from "./firebase-app";
import "./App.css";
//Components
import Login from './Login';
import Library from './Library';
import Signup from './Signup';


class App extends Component {
  constructor(){
    super()
    this.state = {
      cards: []
    }
    
  }

  
  render() {
    const { cards } = this.state;
    const images = cards.map(url => <img src={url}/>)
    return (
      <div>
        <Library onSearch={cards => this.setState({cards: cards})}/>
        {images}
      </div>
    );
  }
}

export default App;
