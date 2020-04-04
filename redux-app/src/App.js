import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {

    console.log(this.props)

    return (
      <div className="App">
        <div className="container">
          <div className="jumbotron">
            Hola {this.props.minombre}
          </div>
        </div>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    minombre: state.nombre
  }
}

export default connect(mapStateToProps)(App);
