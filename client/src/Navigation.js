import React, { Component } from "react";
import { Link } from "react-router-dom";
import fb from './firebase-app';

class Navigation extends Component {

  handleLogout(e) {
    e.preventDefault();
    fb
      .auth()
      .signOut()
  }

  render() {
    const loggedInStyles = {
      visibility: this.props.uid ? 'visible' : 'hidden', 
      opacity: this.props.uid ? 1 : 0
    }
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="form-inline">
          <Link className="btn btn-primary" to="/signup">
            Signup
          </Link>
          <Link className="btn btn-primary" to="/login">
            Login
          </Link>
          <Link className='btn btn-primary' to='/'>Home</Link>
          <button className='btn btn-primary' style={loggedInStyles} onClick={this.handleLogout}>Logout</button>
        </div>
      </nav>
    );
  }
}

export default Navigation;
