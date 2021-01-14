import React, { Component } from "react";

class Diagram extends Component {

  render() {
    return (
      <table class="figureContainer">
        <tr>
          <td class="figure">
            <img src={this.props.src} alt=""></img>
          </td>
        </tr>
      </table>
    );
  }

}

export default Diagram;