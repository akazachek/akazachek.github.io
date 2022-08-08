import React from "react";
import MobileDetector from "../components/MobileDetector";
import pfp from "../media/me.jpg";
import shortcv from "../media/shortcv.pdf";

function About() {
  const pfpAlt = "Headshot";
  const cvDate = "2022-08-08";
  const str = MobileDetector() ? "above" : "to the left";

  return (
    <div className="coDiv">
      <div className="about centredBox leftMarginWide" id="aboutSec">
        <img src={pfp} alt={pfpAlt} className="pfp"></img>
        <br></br>
        <h1> Hey, I'm Alex! </h1>
        <h3 style={{ paddingTop: "1vh" }}>
          {" "}
          I'm a fourth-year undergraduate at{" "}
          <a className="linkPurple" href="https://www.uwo.ca/">
            UWO
          </a>{" "}
          in mathematics and data science.
        </h3>
        <br></br>
        <p>
          Right now I'm working in mathematical physics with{" "}
          <a
            className="linkPurple"
            href="https://www.math.uwo.ca/faculty/barron/barron.html"
          >
            Tatyana Barron
          </a>
          , researching the entanglement of{" "}
          <a
            className="linkPurple"
            href="https://en.wikipedia.org/wiki/Coherent_states_in_mathematical_physics"
          >
            coherent states
          </a>
          . These are states that let you do quantum mechanics on surfaces you
          normally can't. In the winter I did{" "}
          <a className="linkPurple" href="https://arxiv.org/abs/2206.14862">
            some work
          </a>{" "}
          in theoretical machine learning with{" "}
          <a
            className="linkPurple"
            href="https://sites.google.com/site/borriewang/"
          >
            Boyu Wang
          </a>{" "}
          and{" "}
          <a
            className="linkPurple"
            href="https://scholar.google.com/citations?user=BN1zmIQAAAAJ&hl=en"
          >
            Ghazal Farhani
          </a>
          , studying the convergence of neural networks used to solve PDEs (
          <a
            className="linkPurple"
            href="https://en.wikipedia.org/wiki/Physics-informed_neural_networks"
          >
            PINNs
          </a>
          ).
        </p>
        <p>
          This website is home to several posts I've made about things in math I
          find interesting. The most recent one is about a technique used in
          American option pricing. Some other mathy stuff I've done was help
          with the{" "}
          <a className="linkPurple" href="https://cumc.math.ca/2021/">
            2021 CUMC
          </a>
          , where I organized several of the panels and made the website. I also
          made a{" "}
          <a
            className="linkPurple"
            href="https://www.youtube.com/watch?v=4zD8Kd3HgJA"
          >
            video
          </a>{" "}
          with{" "}
          <a className="linkPurple" href="https://www.jacquelinedoan.com/">
            Jacqueline Đoàn
          </a>{" "}
          on the spectral theorem for normal operators.
        </p>
        <p>
          Outside of academics, I like to go rock climbing and do calisthenics.
          I enjoy speedcubing, and play Beat Saber. I'm also interested in
          linguistics.
        </p>
        <p>
          Feel free to read my blog posts or get in touch with me on my socials,
          both of which are {str}! I hope you enjoy your stay. Food and drink is
          not provided.
        </p>
        <p className="cv">
          {" "}
          My résumé is available{" "}
          <a className="linkPurple" href={shortcv}>
            here
          </a>
          {/* {" "}
          and a full curriculum vitae{" "}
          <a className="linkPurple" href={cv}>
            here
          </a>*/}
          . Last updated {cvDate}.
        </p>
      </div>
    </div>
  );
}

export default About;
