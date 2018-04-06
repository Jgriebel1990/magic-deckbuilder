import React, { Component } from "react";
import { Link } from 'react-router-dom';
import mtg from "mtgsdk";

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

  removeDeck(index) {
    this.setState({
      binder: []
    });
  }

  render() {
    const { cards } = this.state;
    const images = cards.map((url, index) => (<img onClick={() => this.handleBinder(index)} src={url}/>));
    // const binder = this.state.binder.map((url, index) => (
    //   <img sry={url} key={url} onClick={() => this.removeCard(index)} />
    // ));
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
          <h1>
            Binder
          </h1>
          {this.state.binder.map((url, index) => (
            <img src={url} key={url} onClick={() => this.removeCard(index)} />
          ))}
          <button className='btn btn-primary' onClick={index => this.removeDeck(index)}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Library;
