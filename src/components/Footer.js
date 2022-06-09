import React from "react";
import { Link } from "react-router-dom";
import git from "../images/github.png";
import wp from "../images/wordpress.png";

const Footer = () => {
  return (
    <div>
      Michelle Vandeschrick 2022; tous droits réservé
      <Link to="https://github.com/MichelleVandes">
        <button type="button" className="btn btn-info">
          <img src={git} alt="" />
        </button>
      </Link>
      <Link to="http://vandesweb.com">
        <button type="button" className="btn btn-info">
          <img src={wp} alt="" />
        </button>
      </Link>
    </div>
  );
};

export default Footer;
