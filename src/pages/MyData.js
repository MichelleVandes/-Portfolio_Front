import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

//import {Navbar, Login, ProjectList} from "../components/index";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import ProjectList from "../components/ProjectList"
import ProjectDetail from "../components/ProjectDetail"
import "../Style/MyData.css";
const project = [
  {_id: "6274de7f53ee39169fc20bb3",
    title: "chouette concept",
    description: "premier projet de groupe 1",
    imageUrl: "chemin 1",
    createdAt: "2022-05-06T08:38:23.568Z",
    updatedAt: "2022-05-06T09:18:20.486Z",
    __v: 0},
    {
    _id: "6274df8c8a6562b9dde3dc31",
    title: "test2 title",
    description: "description 1",
    imageUrl: "chemin 1",
    createdAt: "2022-05-06T08:42:52.929Z",
    updatedAt: "2022-05-06T08:42:52.929Z",
    __v: 0
}
]
    
  ;

const MyData = () => {
  const [myUser, setmyUser] = useState("");
  const [userConnect, setUserConnect] = useState(false);
  let navigate = useNavigate();
  let hello;

  const modalElement = useRef(null);
  const buttonConnect = useRef();

  console.log("modalElement", modalElement);


  const loginUser = (e) => {
    e.preventDefault();
    console.log("Connect user :", e.target.userName.value);
    if ((e.target.name.value === "Vandes")) {
      setUserConnect(true);
      setmyUser(e.target.userName.value);
    }
  };

  const onButtonClick = () => {
  //  console.log("click", document.getElementById("userModal"));
    modalElement.current.style.display === "block"
      ? (modalElement.current.style.display = "none")
      : (modalElement.current.style.display = "block");
  };

// L'utilisateur est connecté, affichage de la liste :
  if (userConnect) {
    hello = "Bienvenue sur votre site " + myUser;
    modalElement.current.style.display = "none";
    buttonConnect.current.value = "Déconnexion";


  } else {
    hello = "Veuillez vous connecter pour accéder à cette page";
  }

const handleRedirection = (_id) => {
    let url = "/" + _id;
    navigate(url);
  }

const handleDelete = () => {
    
}
const handleDetail = (_id) => {
    
}

  return (
    <div>
      <Navbar />
      <p>{hello}</p>
      <button ref={buttonConnect} type="button" onClick={onButtonClick}>
        Connexion
      </button>

      <div id="userModal" ref={modalElement}>
        <Login loginUser={loginUser} />
      </div>
      <h1>Mon tableau de bord</h1>
      <br />
      <ul className="app-ul">
        {project.map((pjt) => (
          <ProjectList
            key={pjt._id}
            details={pjt}
            onCheck={handleDetail}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <ProjectDetail/>
    </div>
  );
};

export default MyData;
