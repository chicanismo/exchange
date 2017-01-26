import React, { Component } from "react";

import Brand from './Brand.jsx';

class NavBar extends Component { 
  cunstructor(props) {

  }
  render() {
    return(
        <div className="container-nav-bar">
          <Brand />
        </div>
      ) 
  }
}

export default NavBar;