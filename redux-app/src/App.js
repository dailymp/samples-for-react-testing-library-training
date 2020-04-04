import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './store'
import Lista from './components/Lista';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Lista />
      </Provider>
    );
  }
  
}
