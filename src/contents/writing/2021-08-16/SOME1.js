import React, { Component } from "react";
/* environments */
import Figure from "../../../components/Figure";
import Theorem from "../../../components/Theorem";
import Proof from "../../../components/Proof";

class SOME1 extends Component {
  componentDidMount() {
    window.KaTeXRender();
  }

  render() {
    return (
      <div class="postContent leftMargin">
        <p style={{ textAlign: "center" }}>
          <iframe
            src="https://www.youtube.com/embed/4zD8Kd3HgJA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{ height: "50vh", width: "80%" }}
          ></iframe>
        </p>
      </div>
    );
  }
}

export default SOME1;
