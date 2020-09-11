import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Register, Login} from "./components/login/index"


class App extends Component {
  render() {
    return (
      <div className="App">
       <Register/>
      </div>
    );
  }
}

export default App;
