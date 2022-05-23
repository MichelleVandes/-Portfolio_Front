import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import loginUser from "./loginUser"

export default function Login({setToken}) {
 
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();

  function close() {
    let url = "/";
    navigate(url);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      userName,
      password,
    });
    if (token !== undefined) {
       setToken(token);
    }
   
  };

  return (
    <div>
      <form
        id="userForm"
        onSubmit={handleSubmit}
        className="col-md-2 offset-md-1 shadow"
      >
        <p>
          name
          <input
            placeholder="Votre nom"
            name="userName"
            required="required"
            onChange={(e) => setUserName(e.target.value)}
          />
        </p>
        <p>
          password
          <input
            type="password"
            name="password"
            required="required"
            onChange={(e) => setPassword(e.target.value)}
          />
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
