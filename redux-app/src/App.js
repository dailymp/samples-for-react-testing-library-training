import React from 'react';
import './App.css';
import User from './components/User';
import { useSelector } from "react-redux";

export default function App() {
  const store = useSelector(state => state);

  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron">
          <h1>Hola {store.nombre}</h1>
          <h2>{store.email}</h2>
          <User />
        </div>
      </div>
    </div>
  );

}