import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faTwitter,
  faDiscord,
  faLinkedin,
  faYoutube,
  faTiktok,
  faDocker,
  faCloudflare,
  faSlack,
  faGoogle,
  faGitlab,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="icons">
      <a href="https://discord.com/" target="_blank">
        <FontAwesomeIcon
          icon={faDiscord}
          className="App-logo"
          style={{ color: "rgb(110,125,242)" }}
        />
      </a>
      <a href="https://www.facebook.com/" target="_blank">
        <FontAwesomeIcon
          icon={faFacebook}
          className="App-logo"
          style={{ color: "rgb(24,124,239)" }}
        />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} className="App-logo" />
      </a>
      <a href="https://twitter.com/" target="_blank">
        <FontAwesomeIcon
          icon={faTwitter}
          className="App-logo"
          style={{ color: "rgb(32,159,231)" }}
        />
      </a>
      <a href="https://github.com/" target="_blank">
        <FontAwesomeIcon icon={faGithub} className="App-logo" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="App-logo"
          style={{ color: "rgb(5,121,179)" }}
        />
      </a>
      <a href="https://www.tiktok.com/en/" target="_blank">
        <FontAwesomeIcon icon={faTiktok} className="App-logo" />
      </a>
      <a href="https://www.youtube.com/" target="_blank">
        <FontAwesomeIcon
          icon={faYoutube}
          className="App-logo"
          style={{ color: "rgb(252,1,18)" }}
        />
      </a>
      <a href="https://slack.com/" target="_blank">
        <FontAwesomeIcon icon={faSlack} className="App-logo" />
      </a>
      <a href="https://www.docker.com/" target="_blank">
        <FontAwesomeIcon
          icon={faDocker}
          className="App-logo"
          style={{ color: "rgb(38,149,237)" }}
        />
      </a>
      <a href="https://www.cloudflare.com/" target="_blank">
        <FontAwesomeIcon icon={faCloudflare} className="App-logo" />
      </a>
      <a href="https://www.google.com/" target="_blank">
        <FontAwesomeIcon
          icon={faGoogle}
          className="App-logo"
          style={{ color: "rgb(57,166,89)" }}
        />
      </a>
      <a href="https://about.gitlab.com/" target="_blank">
        <FontAwesomeIcon icon={faGitlab} className="App-logo" />
      </a>
      <a href=" https://www.microsoft.com/en-us/" target="_blank">
        <FontAwesomeIcon icon={faWindows} className="App-logo" />
      </a>
    </div>
  );
};

export default Footer;
