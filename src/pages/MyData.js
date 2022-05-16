import React from "react";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import "../Style/MyData.css";

const MyData = () => {
  const buttonToOpen = '' //useRef(null);
  const modalElement = '' //useRef(null);



  const loginUser = (e) => {
    e.preventDefault();
    console.log("Connect user :", e.target.name.value);
  };

  const buttonIsOpen = () => {
    
  };

  return (
    <div>
      <Navbar />
      Connexion obligatoire
      <button type="button" ref={buttonToOpen}>
        {" "}
        cliquez ici
      </button>
      <div id="personModal">
        <Modal
          ref={modalElement}
          loginUser={loginUser}
          buttonOpen={buttonIsOpen}
        />
      </div>
      <h1>My data</h1>
      <br />
    </div>
  );
};

export default MyData;
