import React, { Component } from "react";
import fb from "./firebase-app";
import mtg from "mtgsdk";
import "./App.css";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
//Components
import Login from "./Login";
import Signup from "./Signup";
import Navigation from "./Navigation";
import Library from "./Library";

class App extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.setState({
         user: user
        });
      } else {
        this.setState({
         user: {}
        });
      }
    });
  }
  render() {
    const { history } = this.props;
    return (
      <div>
        <Navigation uid={this.state.user.uid} />
        <Switch>
          <Route path="/library" exact render={props => <Library {...this.state} {...props}/>} />
          <Redirect from="/login/*" to="/login" />
          <Route path="/login" exact component={Login} />
          <Redirect path="/signup/*" to="/signup" />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
