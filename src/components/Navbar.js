import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import "../Style/NavBar.css";
import { AiOutlineBars } from "react-icons/ai";

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidht = () => {
      setLargeur(window.innerWidth);
    };
    if (largeur < 500) {
      setToggleMenu(false);
    }
    window.addEventListener("resize", changeWidht);

    return () => {
      window.removeEventListener("resize", changeWidht);
    };
  }, []);

  return (
    <nav>
      {toggleMenu && (
        <ul className="liste ">
          <Link className="items" to="/">
            Home
          </Link>
          <Link className="items" to="/CV">
            mon CV
          </Link>
          <Link className="items" to="/me">
            connexion
          </Link>
        </ul>
      )}

      <button className="btn" onClick={toggleSmallScreen}>
        <AiOutlineBars />
      </button>
    </nav>
  );
};

export default Navbar;
