import React, { Component } from "react";
import fb from "./firebase-app";
import "./App.css";
//Components
import Cards from './Cards';
import Login from './Login';
import SearchBar from './SearchBar';
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
        <Signup />
        <SearchBar onSearch={cards => this.setState({cards: cards})}/>
        <div>
          {images}
        </div>
      </div>
    );
  }
}

export default App;
