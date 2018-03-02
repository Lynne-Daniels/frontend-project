import React, { Component } from 'react';
import './App.css';
import './TweetListContainer';
import TweetListContainer from './TweetListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Twittler</h1>
        </header>
        <TweetListContainer />
      </div>
    );
  }
}

export default App;
