import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    render(){
        return(
            <div>
                <h1>Magic the Gathering Deckbuilder</h1>
                <form action="">
                    <h2>Signup</h2>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <button onClick={}>Signup</button>
                </form>
                <form action="">
                    <h2>Login</h2>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

export default App;
