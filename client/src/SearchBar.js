import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({
      search: e.target.value
    });
  }
  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            //  onChange={(e) => }
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
