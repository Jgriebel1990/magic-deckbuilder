import React, { Component } from "react";
import mtg from 'mtgsdk';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const cardResult = mtg.card.where({ name: this.state.search })
    .then(results => {
      const images = results.map(r => r.imageUrl).filter(r => r !== undefined)
      console.log(images);
    })
  }

  handleSearch(e) {
    this.setState({
      search: e.target.value
    });

  }
  render() {
    return (
      <div>
        <h1>Card Library</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={(e) => this.setState({search: e.target.value})}
            value={this.state.search}
          />
        </form>
        <div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
