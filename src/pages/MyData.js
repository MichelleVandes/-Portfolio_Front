import React, { useRef, useState, useEffect } from "react";

//import {Navbar, Login, ProjectList} from "../components/index";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import ProjectList from "../components/ProjectList";
import ProjectDetail from "../components/ProjectDetail";
import useToken from "../components/useToken";
import "../Style/MyData.css";
import ProjectForm from "../components/ProjectForm";

const MyData = () => {
  const [pjtEnCours, setPjtEnCours] = useState("");
  const [myProjects, setMyProjects] = useState([]);
  const [forGet, setForGet] = useState(false);
  const { token, setToken } = useToken("");
  const projectDetail = useRef();
  const projectList = useRef();

  let myUrl = "http://127.0.0.1:5002/project";

  // Appelé lors du premier affichage et à chaque fois que l'élément "forGet" sera modifié
  useEffect(() => {
    console.log("top 1");
    fetch(myUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setMyProjects(data))
      .catch((error) => {
        console.log(error);
      });
  }, [forGet]);

  // Affichage id Connexion ou récupération liste
  if (!token) {
    return (
      <>
        <Navbar />
        <Login setToken={setToken} />;
      </>
    );
  }

  const handleDetail = (pjt) => {
    projectDetail.current.style.display = "block";
    setPjtEnCours(pjt);
  };

  const handleDelete = (_id) => {
    console.log("pjt enCours ", _id);
    fetch(myUrl + "/" + _id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setMyProjects(data))
      .catch((error) => {
        console.log(error);
      });

    setForGet(!forGet);
  };

  const modifiePjt = (data) => {
    console.log("pjt en cours", pjtEnCours);
    //setForGet(!forGet);
  };

  /////////////////////////////////////////////////////////

  return (
    <div>
      <Navbar />
      <h1>Mon tableau de bord</h1>
      <br />
      {!pjtEnCours && (
        <ul ref={projectList} className="app-ul">
          {myProjects.map((pjt) => (
            <ProjectList
              key={pjt._id}
              details={pjt}
              onCheck={handleDetail}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      )}

      <div id="projectDetail" ref={projectDetail}>
        {pjtEnCours && (
          <ProjectForm pjtDetail={pjtEnCours} modifiePjt={modifiePjt} />
        )}
      </div>
    </div>
  );
};

export default MyData;
