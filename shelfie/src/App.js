import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import Form from './Component/Form/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Dashboard />
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
