import React, { component } from "react";
class Menu extends component {
  render(){
    return(
      <nav ClassName = "bar" id="menu">
        <div ClassName="topBar left button">Home</div>
        <div ClassName="topBar center">Other Projects</div>
        <div ClassName="topBar right">help</div>
      </nav>
    );

  }
}
export default Menu;