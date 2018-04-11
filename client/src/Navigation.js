import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import fb from './firebase-app';

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
      opacity: this.props.uid ? 0 : 1
    }
    const { history } = this.props;
    return (
      <nav className="navbar navbar-light bg-light container">
        <div className="form-inline">
          <Link className="btn btn-primary" style={loggedOutStyles} to="/signup">
            Signup
          </Link>
          <Link className="btn btn-primary" style={loggedOutStyles} to="/login">
            Login
          </Link>
          {/* <Link className='btn btn-primary' style={loggedInStyles} to='library'>Home</Link> */}
          <button className='btn btn-primary' style={loggedInStyles} onClick={this.handleLogout}>Logout</button>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navigation);
