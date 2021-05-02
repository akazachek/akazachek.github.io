import React from "react";
import MobileDetector from "../components/MobileDetector";
import pfp from "../media/me.jpg";
import cv from "../media/cv.pdf";
import shortcv from "../media/shortcv.pdf";

function About() {
  const pfpAlt = "Headshot";
  const cvDate = "2021-05-02";
  const str = MobileDetector() ? "above" : "to the left";

  return (
    <div className="coDiv">
      <div className="about centredBox leftMarginWide" id="aboutSec">
        <img src={pfp} alt={pfpAlt} className="pfp"></img>
        <br></br>
        <h1> Hey, I'm Alex! </h1>
        <h3 style={{ paddingTop: "1vh" }}>
          {" "}
          I just finished the second year of my undergraduate at{" "}
          <a className="linkPurple" href="https://www.uwo.ca/">
            UWO
          </a>{" "}
          in mathematics and data science.
        </h3>
        <br></br>
        <p>
          I enjoy anything mathematical. Broadly, I'm most interested in
          geometric and analytical subjects, and my favourite coursework has
          been in complex analysis and statistics. This summer, I'm doing an
          undergraduate research project under{" "}
          <a
            className="linkPurple"
            href="https://www.math.uwo.ca/faculty/barron/barron.html"
          >
            Dr. Tatyana Barron
          </a>{" "}
          through an NSERC USRA.
        </p>
        <p>
          I'm also involved with the mathematics community in other ways.
          Currently, I'm a committee member for the upcoming{" "}
          <a className="linkPurple" href="https://cumc.math.ca/2021/">
            2021 CUMC
          </a>
          , Canada's largest mathematics conference for undergraduates. My
          biggest role is designing and maintaining the new website. During the
          school year, I have an executive role on{" "}
          <a
            className="linkPurple"
            href="https://www.uwo.ca/math/undergraduate/current_students/macaw/index.html"
          >
            MaCAW
          </a>
          , the official club of Western's mathematics department. I help write
          and grade our biweekly contests, and organize our once-a-semester
          student seminars.
        </p>
        <p>
          Outside of mathematics, I have an interest in linguistics. I'm
          intrigued by how different languages communicate the same ideas. One
          of my favourite examples is describing colour: Japanese doesn't
          distinguish between <i>green</i> and <i>blue</i> like English, and
          instead treats both as 青い, whereas Russian further separates{" "}
          <i>blue</i> and <i>light blue</i> as <i>синий</i> and <i>голубой</i>.
          Incidentally, I know (varying degrees of) those 3 languages.
        </p>
        <p>
          I also enjoy designing things. I find front-end web development fun
          for that reason; this website is written in React.js. Similarly, I
          like tinkering with \(\LaTeX\), despite its constantly overfull
          hboxes.
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
          </a>{" "}
          and full CV{" "}
          <a className="linkPurple" href={cv}>
            here
          </a>
          . Last updated {cvDate}.
        </p>
      </div>
    </div>
  );
}

export default About;
