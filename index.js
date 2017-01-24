import React from "react";
import ReactDOM from "react-dom";
import App from './src/app';

console.log("reactDOM: ", ReactDOM);

ReactDOM.render(<App />,
  document.getElementById("what"),
  () => { console.log('react render working')}
);
