import { useNavigate } from "react-router-dom";


export default function Login(props) {
   let navigate = useNavigate();
  function close() {
    let url = "/";
    navigate(url);
  }

  return (
    <div>
      <form
        id="userForm"
        onSubmit={(e) => props.loginUser(e)}
        className="col-md-3 offset-md-1 shadow"
      >
        <p>
          name
          <br />
          <input placeholder="Votre nom" name="userName" required="required" />
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
