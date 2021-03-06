import React, { Component } from "react";
import { Link } from "react-router-dom";
import mtg from "mtgsdk";
import fb from "./firebase-app";
import { db } from "./firebase-app";
import "./CSS/library.css";

class Library extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      search: "",
      binder: [],
      didUpdate: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBinder = this.handleBinder.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.removeDeck = this.removeDeck.bind(this);
    this.saveBinder = this.saveBinder.bind(this);
    this.retrieveDecks = this.retrieveDecks.bind(this);
    this.updateDeck = this.updateDeck.bind(this);
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
        userId: this.props.user.uid,
        cards: this.state.binder
      })
      .then(ref => {
        console.log("added document with ID:", ref.id);
      });
  }

  retrieveDecks(e) {
    const decksRef = db.collection("decks");
    console.log(decksRef);
    decksRef
      .where("userId", "==", this.props.user.uid)
      .get()
      .then(response =>
        this.setState({
          binder: response.docs[0].data().cards
        })
      )
      .catch(function(error) {
        msg: error
      })
  }

  updateDeck(e) {
    const deckRef = db.collection("decks").doc('2qbTFZqX78inJvIviBd6');
    const updateSingle = deckRef.update({
      cards: this.state.binder,
      userId: this.props.user.uid
    });
    console.log(deckRef);
  }

  render() {
    const { cards } = this.state;
    const images = cards.map((url, index) => (
      <img
        onClick={() => this.handleBinder(index)}
        src={url}
        key={url + index}
        alt={url}
      />
    ));
    // const updateSuccessful = {
    //   visibility: this.state.didUpdate ? 'visible' : 'hidden',
    //   opacity: this.state.didUpdate ? 1 : 0,
    // }
    return (
      <div className="">
        <div className="">
          <div className="">
            <h1 className='card-lib'>Card Library</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                className='lib-form'
                type="text"
                onChange={e => this.setState({ search: e.target.value })}
                value={this.state.search}
              />
            </form>
            <section className="scroll-box">{images}</section>
          </div>
          <h1 className='binder-txt'>Deck</h1>
          <div className="scroll-box--binder">
            {this.state.binder.map((url, index) => (
              <img
                alt={url}
                src={url}
                key={url + index}
                onClick={() => this.removeCard(index)}
              />
            ))}
          </div>
          <button
            className="btn rst-btn"
            onClick={index => this.removeDeck(index)}
          >
            Reset
          </button>
          <button className='save-btn btn' onClick={(e) => this.saveBinder()}>Save</button>
          <button className='retrieve-btn btn' onClick={(e) => this.retrieveDecks()}>
            Retrieve Deck
          </button>
          <button className='update-btn btn' onClick={(e) => this.updateDeck()}>Update</button>
        </div>
      </div>
    );
  }
}

export default Library;
