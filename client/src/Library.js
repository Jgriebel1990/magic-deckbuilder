import React, { Component } from "react";
import { Link } from "react-router-dom";
import mtg from "mtgsdk";
import fb from "./firebase-app";
import { db } from "./firebase-app";

class Library extends Component {
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
    this.removeDeck = this.removeDeck.bind(this);
    this.saveBinder = this.saveBinder.bind(this);
    // this.retrieveBinder = this.retrieveBinder.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const cardResult = mtg.card
      .where({ name: this.state.search })
      .then(results => {
        const images = results
          .filter(
            card => card.name.toLowerCase() === this.state.search.toLowerCase()
          )
          .map(card => card.imageUrl);
        this.setState({
          cards: images
        });
      });
  }

  handleSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  handleBinder(index) {
    this.setState({
      binder: [...this.state.binder, this.state.cards[index]]
    });
  }

  removeCard(position) {
    const first = this.state.binder.slice(0, position);
    const last = this.state.binder.slice(position + 1);
    const newBinder = [...first, ...last];
    this.setState({
      binder: newBinder
    });
  }

  removeDeck(e) {
    this.setState({
      binder: []
    });
  }

  saveBinder(e) {
    const addDoc = db
      .collection("decks")
      .add({
        user: this.props.user.uid,
        card: 'poopy'

      })
      .then(ref => {
        console.log("added document with ID:", ref.id);
      });
  }
  
  // retrieveBinder(e) {}

  render() {
    const { cards } = this.state;
    const images = cards.map((url, index) => (
      <img onClick={() => this.handleBinder(index)} src={url} key={url} />
    ));
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
          {this.state.binder.map((url, index) => (
            <img
              src={url}
              key={url + index}
              onClick={() => this.removeCard(index)}
            />
          ))}
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={index => this.removeDeck(index)}
          >
            Reset
          </button>
          <button onClick={() => this.saveBinder()}>Save</button>
        </div>
      </div>
    );
  }
}

export default Library;
