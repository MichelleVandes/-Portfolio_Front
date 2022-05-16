import React, { useEffect } from "react";

export default function Modal(props) {
  function close() {
    console.log("close");
    props.modalElement.current.style.display = "none";
  }

  function open() {
    props.modalElement.current.style.display = "block";
  }

  useEffect(() => (props.buttonIsOpen.onClick = open));

  return (
    <div>
      <h2>Connexion</h2>
      <form id="personForm" onSubmit={(e) => props.loginUser(e)}>
        <p>
          name
          <br />
          <input placeholder="Enter name" name="name" required="required" />
        </p>
        <p>
          password
          <br />
          <input type="password" name="password" required="required" />
        </p>
        <div id="buttons">
          <button type="submit">OK</button>
          <button type="button" onClick={close}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
