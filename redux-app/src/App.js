import React, { Component } from 'react';
import './App.css';
import User from './components/User';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="jumbotron">
            <User />
          </div>
        </div>
      </div>
    );
  }
}