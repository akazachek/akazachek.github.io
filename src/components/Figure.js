import React, { Component } from "react";

class Figure extends Component {
  render() {
    return (
      <table className="figureContainer">
        <tr>
          <td
            style={{
              height: this.props.height == null ? "30vh" : this.props.height
            }}
            className="figure centredBox leftMarginWide"
          >
            <img src={this.props.src} alt={this.props.caption}></img>
          </td>
        </tr>
        <tr>
          <td className="caption">
            <h4>
              Figure {this.props.no}: {this.props.caption}
            </h4>
          </td>
        </tr>
      </table>
    );
  }
}

export default Figure;
