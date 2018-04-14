import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import fb from './firebase-app';
import './CSS/nav.css'

class Navigation extends Component {

  handleLogout = (e) => {
    e.preventDefault();
    fb
      .auth()
      .signOut()
      .then(() => this.props.history.push('/login'))
  }

  render() {
    const loggedInStyles = {
      visibility: this.props.uid ? 'visible' : 'hidden', 
      opacity: this.props.uid ? 1 : 0
    }

    const loggedOutStyles = {
      visibility: this.props.uid ? 'hidden' : 'visible',
      opacity: this.props.uid ? 0 : 1,
    }
    const { history } = this.props;
    return (
      <nav className="nav navbar">
        <div className="form-inline">
          <Link className="signup--btn btn" style={loggedOutStyles} to="/signup">
            Signup
          </Link>
          <Link className="login--btn btn" style={loggedOutStyles} to="/login">
            Login
          </Link>
          <Link className='btn home--btn' style={loggedInStyles} to='library'>Home</Link>
          <button className='btn logout--btn' style={loggedInStyles} onClick={this.handleLogout}>Logout</button>
          <span className='nav--span'> Magic Deck Builder </span>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navigation);
