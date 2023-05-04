import React from "react";
import MobileDetector from "../components/MobileDetector";
import pfp from "../media/me.jpg";
import resume from "../media/shortcv.pdf";
import thesis from "../media/kazachek.pdf";

function About() {
  const pfpAlt = "Headshot";
  const cvDate = "2023-05-03";
  const str = MobileDetector() ? "above" : "to the left";

  return (
    <div className="coDiv">
      <div className="about centredBox leftMarginWide" id="aboutSec">
        <img src={pfp} alt={pfpAlt} className="pfp"></img>
        <br></br>
        <h1> Hey, I'm Alex! </h1>
        <h3 style={{ paddingTop: "1vh" }}>
          {" "}
          I'm currently an intern on the systematic trading team at{" "}
          <a
            className="linkPurple"
            href="https://www.otpp.com/en-ca/investments/our-investments/capital-markets/quantitative-strategy-research/"
          >
            OTPP
          </a>
          .
        </h3>
        <br></br>
        <p>
          I'm working in portfolio construction, researching ways to improve
          volatility estimation and normalization. Before that I was an
          undergrad in math and data science at{" "}
          <a className="linkPurple" href="https://www.uwo.ca/">
            UWO
          </a>
          , primarily supervised by{" "}
          <a
            className="linkPurple"
            href="https://www.math.uwo.ca/faculty/barron/barron.html"
          >
            Tatyana Barron
          </a>
          . In September I'll be starting my master's in applied math at{" "}
          <a className="linkPurple" href="https://uwaterloo.ca/">
            Waterloo
          </a>{" "}
          under{" "}
          <a
            className="linkPurple"
            href="https://www.colorado.edu/physics/graeme-smith"
          >
            Graeme Smith
          </a>
          , joint with the{" "}
          <a
            className="linkPurple"
            href="https://uwaterloo.ca/institute-for-quantum-computing/ "
          >
            IQC
          </a>
          .
        </p>
        <p>
          During my undergrad I did some research in mathematical physics,
          mostly about{" "}
          <a
            className="linkPurple"
            href="https://en.wikipedia.org/wiki/Coherent_states_in_mathematical_physics"
          >
            coherent states
          </a>
          . These are mathematical objects inspired by quantum mechanical
          descriptions of the light emitted by a laser. With Tatyana, I derived
          a{" "}
          <a className="linkPurple" href="https://arxiv.org/abs/2303.06185">
            lower bound
          </a>{" "}
          for the entanglement of certain pairs of coherent states, which will
          be presented later this summer at{" "}
          <a className="linkPurple" href="https://conference-gsi.org/">
            GSI 2023
          </a>
          . I also wrote my (unofficial){" "}
          <a className="linkPurple" href={thesis}>
            undergrad thesis
          </a>{" "}
          on bicoherent states, the analogues of coherent states in a slightly
          esoteric{" "}
          <a
            className="linkPurple"
            href="https://en.wikipedia.org/wiki/Non-Hermitian_quantum_mechanics"
          >
            generalization of quantum mechanics
          </a>
          .
        </p>
        <p>
          I also did some work in theoretical machine learning under{" "}
          <a
            className="linkPurple"
            href="https://sites.google.com/site/borriewang/home"
          >
            Boyu Wang
          </a>
          . We studied{" "}
          <a
            className="linkPurple"
            href="https://en.wikipedia.org/wiki/Physics-informed_neural_networks"
          >
            PINNs
          </a>
          , neural networks used to solve PDEs. We proved that optimizing these
          networks with momentum results in{" "}
          <a className="linkPurple" href="https://arxiv.org/abs/2206.14862">
            less spectral bias
          </a>
          , meaning different components of the solutions are learned evenly.
        </p>
        {/*
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
  </p>*/}
        <p>
          Feel free to read my blog posts or get in touch with me on my socials,
          both of which are {str}! I hope you enjoy your stay. Food and drink is
          not provided.
        </p>
        <p className="cv">
          {" "}
          My résumé is available{" "}
          <a className="linkPurple" href={resume}>
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
