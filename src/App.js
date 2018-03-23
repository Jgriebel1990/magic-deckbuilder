import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render(){
        return(
            <div>
                <h1>Magic the Gathering Deckbuilder</h1>
                <form action="">
                    <h2>Signup</h2>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <button>Signup</button>
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
