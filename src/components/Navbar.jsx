import React, { Component } from "react";

import Brand from './Brand.jsx';
import Logo from './Logo.jsx';
import Navbutton from './Navbutton.jsx';

class NavBar extends Component { 
  cunstructor(props) {

  }
  render() {
    return(
        <div className="container-nav-bar">
          <Brand />
          <Logo />
          <Navbutton />
        </div>
      ) 
  }
}

export default NavBar;