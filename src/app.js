import React, { Component } from "react";
import ReactDOM from "react-dom";

import Testing from "./components/testing.jsx";
import Navbar from './components/Navbar.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Testing />
      </div>
    )
  };
};
