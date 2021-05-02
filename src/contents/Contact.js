import React, { Fragment } from "react";
import { IconContext } from "react-icons";
import MobileDetector from "../components/MobileDetector";
/* handles */
import {
  RiInstagramFill,
  RiMailSendFill,
  RiGithubFill,
  RiLinkedinBoxFill
} from "react-icons/ri";
/* contact photo */
import pfp from "../media/tottori.jpg";
/* info from css */
var accentColour = "#4c2a6e";
var vh = window.innerHeight / 100;

function Contact() {
  const pfpAlt = "Me riding a camel in the Tottori sanddunes";
  const isMobile = MobileDetector();
  return (
    <div className="coDiv contact">
      <table className="contactHead">
        {isMobile ? (
          <span>
            <tr>
              <td className="contactPhoto">
                <img src={pfp} alt={pfpAlt}></img>
              </td>
            </tr>
            <tr>
              <td className="contactMessage">
                <h1>Thank you for reaching out!</h1>
              </td>
            </tr>
          </span>
        ) : (
          <tr>
            <td className="contactMessage">
              <h1>Thank you for reaching out!</h1>
            </td>
            <td className="contactPhoto">
              <img src={pfp} alt={pfpAlt}></img>
            </td>
          </tr>
        )}
      </table>
      <IconContext.Provider value={{ color: accentColour, size: 8 * vh }}>
        <table className="contactInfo">
          {isMobile ? (
            <span>
              <tr>
                <td className="handleIcon">
                  <a href="https://www.instagram.com/kazachekalex/">
                    <RiInstagramFill />
                  </a>
                </td>
                <td className="handle">
                  <a href="https://www.instagram.com/kazachekalex/">
                    {" "}
                    @kazachekalex{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="handleIcon">
                  <a href="mailto: alexdkazachek@gmail.com">
                    <RiMailSendFill />
                  </a>
                </td>
                <td className="handle">
                  <a href="mailto: alexdkazachek@gmail.com">
                    {" "}
                    alexdkazachek@gmail.com{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="handleIcon">
                  <a href="https://github.com/akazachek">
                    <RiGithubFill />
                  </a>
                </td>
                <td className="handle">
                  <a href="https://github.com/akazachek"> akazachek </a>
                </td>
              </tr>
              <tr>
                <td className="handleIcon">
                  <a href="https://linkedin.com/in/kazachek">
                    <RiLinkedinBoxFill />
                  </a>
                </td>
                <td className="handle">
                  <a href="https://linkedin.com/in/kazachek"> kazachek </a>
                </td>
              </tr>
            </span>
          ) : (
            <Fragment>
              <tr>
                <td className="handleIcon">
                  <a href="https://www.instagram.com/kazachekalex/">
                    <RiInstagramFill />
                  </a>
                </td>
                <td className="handle">
                  <a href="https://www.instagram.com/kazachekalex/">
                    {" "}
                    @kazachekalex{" "}
                  </a>
                </td>
                <td className="handleIcon">
                  <a href="mailto: alexdkazachek@gmail.com">
                    <RiMailSendFill />
                  </a>
                </td>
                <td className="handle">
                  <a href="mailto: alexdkazachek@gmail.com">
                    {" "}
                    alexdkazachek@gmail.com{" "}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="handleIcon">
                  <a href="https://github.com/akazachek">
                    <RiGithubFill />
                  </a>
                </td>
                <td className="handle">
                  <a href="https://github.com/akazachek"> akazachek </a>
                </td>
                <td className="handleIcon">
                  <a href="https://linkedin.com/in/kazachek">
                    <RiLinkedinBoxFill />
                  </a>
                </td>
                <td className="handle">
                  <a href="https://linkedin.com/in/kazachek"> kazachek </a>
                </td>
              </tr>
            </Fragment>
          )}
        </table>
      </IconContext.Provider>
    </div>
  );
}

export default Contact;
