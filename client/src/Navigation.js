import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
            <Link className='btn btn-primary' to='/signup'>Signup</Link>
          {/* <button class="btn btn-primary" type="button">
            Main button
          </button> */}
          <Link className='btn btn-primary' to='/login'>Login</Link>
          {/* <button class="btn btn-primary" type="button">
            Smaller button
          </button> */}
        </form>
      </nav>
    );
  }
}

export default Navigation;
