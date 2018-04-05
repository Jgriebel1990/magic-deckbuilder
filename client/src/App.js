import React, { Component } from "react";
import fb from "./firebase-app";
import mtg from 'mtgsdk';
import "./App.css";
//Components
import Login from "./Login";
import Signup from "./Signup";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      search: "",
      binder: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBinder = this.handleBinder.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.saveBinder = this.saveBinder.bind(this);
    this.removeDeck = this.removeDeck.bind(this);
  }
  handleSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const cardResult = mtg.card
      .where({ name: this.state.search })
      .then(results => {
        const images = results
          .filter(card => card.name.toLowerCase() === this.state.search)
          .map(card => card.imageUrl);
        this.setState({
          cards: images,
        })
      });
  }

  handleBinder(index){
    this.setState({
      binder: [
        ...this.state.binder,
        this.state.cards[index]
      ]
    });
  }

  removeCard(position){
    const first = this.state.binder.slice(0, position);
    const last = this.state.binder.slice(position + 1);
    const newBinder = [
      ...first,
      ...last
    ]
    this.setState({
      binder: newBinder
    })
  }

  removeDeck(index){
    this.setState({
      binder: []
    })
  }

  saveBinder(index){
    this.setState
  }
  

  render() {
    const { cards } = this.state;
    const images = cards.map((url, index) => <img onClick={() => this.handleBinder(index)} src={url} />);
    return (
      <div>
        <h1>Card Library</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={e => this.setState({ search: e.target.value })}
            value={this.state.search}
          />
        </form>
        {images}
        <div>
          <h1>Binder</h1>
          {this.state.binder.map((url, index) => <img src={url} key={url} onClick={() => this.removeCard(index)}/> )}
        </div>
        <button onClick={(index) => this.removeDeck(index)}>Reset</button>
        <button>Save</button>
      </div>
    );
  }
}

export default App;
