import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <Link className="btn btn-primary" to="/signup">
            Signup
          </Link>
          <Link className="btn btn-primary" to="/login">
            Login
          </Link>
          <Link className='btn btn-primary' to='/'>Home</Link>
        </form>
      </nav>
    );
  }
}

export default Navigation;
