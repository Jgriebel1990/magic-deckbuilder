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
      search: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
          cards: images
        })
      });
  }

  render() {
    const { cards } = this.state;
    const images = cards.map(url => <img onClick={() => console.log(url)} src={url} />);
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
        {/* <Library onSearch={cards => this.setState({cards: cards})}
                 cards={this.props.cards}/> */}
        <div>{images}</div>
      </div>
    );
  }
}

export default App;
