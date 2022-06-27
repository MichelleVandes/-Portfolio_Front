import React from "react";
import git from "../images/githubB.png";
import wp from "../images/wordpressB.png";
import "../Style/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const myStyle = {
    width: "100%",
    color: "#f1f1f1",
    backgroundColor: "#cd005a",
    height: "auto",
    padding: '0.8rem'
  };
  return (
    <div style={myStyle} className="text-center ">
      <div className="m-1">
        <a
          href="https://github.com/MichelleVandes"
          target="_blank"
          rel="noreferrer"
          className="m-1"
        >
          <img src={git} alt="github" />
        </a>
        <a
          href="https://github.com/MichelleVandes"
          target="_blank"
          rel="noreferrer"
          className="m-1"
        >
          <img src={wp} alt="wordpress" />
        </a>
      </div>
      <div>Michelle Vandeschrick 2022; tous droits réservé</div>
    </div>
  );
};

export default Footer;
