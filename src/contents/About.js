import React from "react";
import MobileDetector from "../components/MobileDetector";
import pfp from "../media/me.jpg";
import shortcv from "../media/shortcv.pdf";

function About() {
  const pfpAlt = "Headshot";
  const cvDate = "2021-09-06";
  const str = MobileDetector() ? "above" : "to the left";

  return (
    <div className="coDiv">
      <div className="about centredBox leftMarginWide" id="aboutSec">
        <img src={pfp} alt={pfpAlt} className="pfp"></img>
        <br></br>
        <h1> Hey, I'm Alex! </h1>
        <h3 style={{ paddingTop: "1vh" }}>
          {" "}
          I'm a third year undergraduate at{" "}
          <a className="linkPurple" href="https://www.uwo.ca/">
            UWO
          </a>{" "}
          in mathematics and data science.
        </h3>
        <br></br>
        <p>
          This past summer I did research under{" "}
          <a
            className="linkPurple"
            href="https://www.math.uwo.ca/faculty/barron/barron.html"
          >
            Dr. Tatyana Barron
          </a>{" "}
          through an NSERC USRA, covering some aspects of quantum state geometry
          and information theory. I was also one of the organizers for the{" "}
          <a className="linkPurple" href="https://cumc.math.ca/2021/">
            2021 Canadian Undergraduate Mathematics Conference
          </a>
          . My role was in creating the website, as well as organizing the
          panels and workshops. I also presented an introduction to quantum
          entanglement, which you can watch{" "}
          <a
            className="linkPurple"
            href="https://www.youtube.com/watch?v=K2HlbbaDlyE"
          >
            here
          </a>
          . Right now, I'm in charge of the academics for{" "}
          <a
            className="linkPurple"
            href="https://www.uwo.ca/math/undergraduate/current_students/macaw/index.html"
          >
            MaCAW
          </a>
          , the official club of Western's mathematics department, putting on
          events like student seminars.
        </p>
        <p>
          Outside of academics, I like to go rock climbing and do calisthenics.
          I'm also interested in fashion, with my Instagram being mostly outfit
          shots. Being interested in linguistics in general, I like learning
          languages, and know some Russian and Japanese. Convicing myself that
          it's cardio, I also play a lot of Beat Saber (here is my{" "}
          <a
            className="linkPurple"
            href="https://scoresaber.com/u/76561198089263800"
          >
            Score Saber
          </a>{" "}
          profile).
        </p>
        <p>
          Feel free to read my blog posts or get in touch with me on my socials,
          both of which are {str}. I hope you enjoy your stay. Food and drink is
          not provided.
        </p>
        <p className="cv">
          {" "}
          My resume is available{" "}
          <a className="linkPurple" href={shortcv}>
            here
          </a>
          . Last updated {cvDate}.
        </p>
      </div>
    </div>
  );
}

export default About;
