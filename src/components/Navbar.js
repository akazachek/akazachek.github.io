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

  componentWillMount() {
    let page = "Who Am I?";
    if (this.props.path == "/Posts") {
      page = "Posts";
    } else if (this.props.path == "/Contact") {
      page = "Contact";
    }
    this.setState({ NavActiveItem: page });
  }

  render() {
    return (
      <div className="navContainer centredBox">
        <nav>
          <ul>
            <NavItem
              active={this.state.NavActiveItem == "Who Am I?"}
              item="Who Am I?"
              tolink="/"
              click={this.handleClick}
            />
            <NavItem
              active={this.state.NavActiveItem == "Posts"}
              item="Posts"
              tolink="/Posts"
              click={this.handleClick}
            />
            <NavItem
              active={this.state.NavActiveItem == "Contact"}
              item="Contact"
              tolink="/Contact"
              click={this.handleClick}
            />
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
