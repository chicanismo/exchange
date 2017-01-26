import React, { Component } from "react";
import ReactDOM from "react-dom";

import Testing from "./components/testing.jsx";
import Landing from "./components/Landing.jsx"

export default class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Testing />
      </div>
    )
  };
};
