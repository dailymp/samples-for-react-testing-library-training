import React from 'react';
import './App.css';
import User from './components/User';
import { useSelector } from "react-redux";
import Table from './components/Table';

export default function App() {
  const store = useSelector(state => state);
  const swagger = "https://store-webapi.herokuapp.com/swagger-ui.html#/produto-controller";

  return (    
    <div className="App">
      <div className="container">
        <div className="jumbotron">
          <div className="row">
            <div className="col-md-12">
              <h2>Hola {store.nombre}</h2>
              <h2>{store.email}</h2>
              <User />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="float-right">
              <a type="button" href={swagger} target="_blank" className="btn btn-success" rel="noopener noreferrer">Open API</a>
            </div>
            <Table data={store.lista} />
          </div>
        </div>
      </div>
    </div>
  );

}