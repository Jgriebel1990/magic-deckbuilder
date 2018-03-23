import React, { Component } from 'react';
import fb from './firebase-app';
import './App.css';


class App extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            uid: ''
        }
        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    
    handleSignup(e){
        e.preventDefault();
        fb.auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(response => (this.setState({
                    email: response.email,
                    uid: response.uid
                })))
                .catch(function(error) {
            // Handle Errors here.
            console.log(error)
            
            // ...
        });
    };

    handleLogin(e){
        this.setState({
            email: e.target.value
        });
    };
    render(){
        return(
            <div>
                <h1>Magic the Gathering Deckbuilder</h1>
                <form onSubmit={this.handleSignup}>
                    <h2>Signup</h2>
                    <input type="email" placeholder='Email' value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
                    <input type="password" placeholder='Password' value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
                    <button >Signup</button>
                </form>
                <form action="">
                    <h2>Login</h2>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <button>Login</button>
                </form>
                <div>
                    <h1>Search</h1>
                    <form action="">
                        <input type="text"/>
                    </form>
                    <div className='card'>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
