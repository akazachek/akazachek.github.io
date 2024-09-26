import React from "react";
import MobileDetector from "../components/MobileDetector";
import pfp from "../media/me.jpg";
import resume from "../media/shortcv.pdf";
import thesis from "../media/kazachek.pdf";

function About() {
  const pfpAlt = "Headshot";
  const cvDate = "2024-09-26";
  const str = MobileDetector() ? "above" : "to the left";

  return (
    <div className="coDiv">
      <div className="about centredBox leftMarginWide" id="aboutSec">
        <img src={pfp} alt={pfpAlt} className="pfp"></img>
        <h1 style={{ paddingTop: "1vh" }}> Hey, I'm Alex! </h1>
        <h3 style={{ paddingTop: "1vh", paddingBottom: "1vh" }}>
          {" "}
          I'm currently a master's student at the{" "}
          <a
            className="linkPurple"
            href="https://uwaterloo.ca/institute-for-quantum-computing/"
          >
            IQC
          </a>
          .
        </h3>
        <p>
          My interests are broadly in quantum information theory. I'm mainly
          thinking about channel capacity additivity conjectures right now. My
          advisor is{" "}
          <a
            className="linkPurple"
            href="https://uwaterloo.ca/institute-for-quantum-computing/profiles/graeme-smith"
          >
            Graeme Smith
          </a>
          . Recently, I made{" "}
          <a
            className="linkPurple"
            href="https://www.youtube.com/watch?v=seugK4PrW48"
          >
            a video
          </a>{" "}
          for TED-Ed about math and axioms!
        </p>
        <p>
          I did my undergrad in math and data science at{" "}
          <a className="linkPurple" href="https://www.uwo.ca/">
            UWO
          </a>
          , where I worked under{" "}
          <a
            className="linkPurple"
            href="https://www.math.uwo.ca/faculty/barron/barron.html"
          >
            Tatyana Barron
          </a>
          . We derived{" "}
          <a className="linkPurple" href="https://arxiv.org/abs/2303.06185">
            some lower bounds
          </a>{" "}
          for the entanglement entropy of certain{" "}
          <a
            className="linkPurple"
            href="https://en.wikipedia.org/wiki/Coherent_states_in_mathematical_physics"
          >
            coherent states
          </a>{" "}
          (and{" "}
          <a className="linkPurple" href="https://arxiv.org/abs/2303.06185">
            here
          </a>{" "}
          is the talk!). She also supervised my{" "}
          <a className="linkPurple" href={thesis}>
            undergrad thesis
          </a>{" "}
          on bicoherent states, generalizations of coherent states to{" "}
          <a
            className="linkPurple"
            href="https://en.wikipedia.org/wiki/Non-Hermitian_quantum_mechanics"
          >
            non-Hermitian settings
          </a>
          . I briefly worked with{" "}
          <a
            className="linkPurple"
            href="https://sites.google.com/site/borriewang/home"
          >
            Boyu Wang
          </a>{" "}
          as well on{" "}
          <a
            className="linkPurple"
            href="https://en.wikipedia.org/wiki/Physics-informed_neural_networks"
          >
            PINNs
          </a>
          , neural networks used to solve PDEs, where we proved optimizing them
          with momentum results in{" "}
          <a className="linkPurple" href="https://arxiv.org/abs/2206.14862">
            less spectral bias
          </a>
          .
        </p>
        <p>
          This past summer I worked on an equity HFT desk at{" "}
          <a className="linkPurple" href="https://www.tdsecurities.com/ca/en">
            TD Securities
          </a>
          , where I did some research in time series forecasting and developed
          an order book simulator. Prior to that I was on the systematic trading
          team at{" "}
          <a
            className="linkPurple"
            href="https://www.otpp.com/en-ca/investments/our-investments/capital-markets/quantitative-strategy-research/"
          >
            OTPP
          </a>
          , helping on a project about volatility estimation for portfolio
          construction.
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
          In my spare time I enjoy reading, writing poetry, and have recently
          learned to crochet. I also play{" "}
          <a
            className="linkPurple"
            href="https://beatleader.xyz/u/76561198089263800"
          >
            Beat Saber
          </a>{" "}
          and Scrabble. Feel free to read my blog posts or get in touch with me
          on my socials, both of which are {str}! I hope you enjoy your stay.
          Food and drink is not provided.
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
