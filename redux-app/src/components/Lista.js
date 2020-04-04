import React, { Component } from 'react'
import * as ListaActions from './store/actions/lista'
import { bindActionCreators } from "redux"
import { connect } from 'react-redux';

class Lista extends Component {
    state = {
      newText: ""
    };
  
    handleSubmit = event => {
      event.preventDefault();
  
      this.props.addTodo(this.state.newTodoText);
  
      this.setState({ newText: "" });
    };
  
    render() {
      return (
        <div className="App">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={e => this.setState({ newText: e.target.value })}
              value={this.state.newText}
            />
            <button type="submit">Salvar</button>
          </form>
          <ul>
            {this.props.lista.map(item => <li key={item.id}>{item.text}</li>)}
          </ul>
        </div>
      );
    }
  }
  
  const mapStateToProps = state => ({
    lista: state.lista
  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(ListaActions, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Lista);