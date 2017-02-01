import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk"
import App from './src/app';

import { createStore, applyMiddleware, compose } from "redux";
import { Provider, IntlProvider } from "react-redux";
import root from "./src/reducers/root.reducer";

const store = createStore(
  root,
  applyMiddleware(thunkMiddleware)
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("what"),
  () => { console.log('react render working')}
);
