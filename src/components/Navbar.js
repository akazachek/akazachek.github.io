import React, { Component } from "react";
import NavItem from "./NavItem";

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      NavActiveItem: "Who Am I?"
    };
  }

  handleClick = (x) => {
    if (this.state.NavActiveItem.length > 0) {
      document
        .getElementById(this.state.NavActiveItem)
        .classList.remove("navActive");
    }
    this.setState({ NavActiveItem: x }, () => {
      document
        .getElementById(this.state.NavActiveItem)
        .classList.add("navActive");
    });
  };

  render() {
    return (
      <div class="navContainer centredBox">
        <nav>
          <ul>
            <NavItem
              item="Who Am I?"
              tolink="/"
              click={this.handleClick}
            ></NavItem>
            <NavItem
              item="Posts"
              tolink="/Posts"
              click={this.handleClick}
            ></NavItem>
            <NavItem
              item="Contact"
              tolink="/Contact"
              click={this.handleClick}
            ></NavItem>
          </ul>
        </nav>
      </div>
    );
  }

  
}

export default NavBar;