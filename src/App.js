import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import logo from './logo.svg';
import './App.css';

const responseFacebook = response => {
  console.log( response );
}

const componentClicked = () => {
  console.log( 'Clicked.' )
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <FacebookLogin 
            appId="221332278735684"
            autoLoad={true}
            fields="name,email,picture"
            onClick={ componentClicked }
            callback={ responseFacebook }
          />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
