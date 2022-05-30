import React, { useRef, useState, useEffect } from "react";

//import {Navbar, Login, ProjectList} from "../components/index";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import ProjectList from "../components/ProjectList";
import useToken from "../components/useToken";
import "../Style/MyData.css";
import ProjectForm from "../components/ProjectForm";

const MyData = () => {
  const [pjtEnCours, setPjtEnCours] = useState("");
  const [pjtDt, setPjtDt] = useState(false);
  const [myProjects, setMyProjects] = useState([]);
  const [forGet, setForGet] = useState(false);
  const { token, setToken } = useToken("");
  const projectDetail = useRef();
  const projectList = useRef();

  let myUrl = "http://127.0.0.1:5002/project";
  let fetchMethod = "";

  // Appelé lors du premier affichage et à chaque fois que l'élément "forGet" sera modifié
  useEffect(() => {
    console.log("top 1; pjtEnCours :", pjtEnCours);
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
  const initNew = () => {

    handleDetail({ _id: "", title: "", description: "", imageUrl: "" });
  };
  const handleDetail = (pjt) => {
    projectDetail.current.style.display = "block";
    setPjtDt(true);
    setPjtEnCours(pjt);
  };

  const handleAnnul = () => {
    projectDetail.current.style.display = "none";
    setPjtEnCours("");
    setPjtDt(false);
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

  const handleValid = (pjtModif) => {
    console.log("Top 2: pjtenCours ", pjtEnCours);

    console.log("Top 2: pjtDetail ", pjtModif);

    const _id = pjtEnCours._id;

    let fetchUrl = "";
    if (_id) {
      fetchMethod = "PUT";
      fetchUrl = myUrl + "/" + _id;
    } else {
      fetchMethod = "POST";
      fetchUrl = myUrl + "/newPjt";
    }

    fetch(fetchUrl, {
      method: fetchMethod,
      body: JSON.stringify(pjtModif),
      mode: "cors",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then(function (response) {
        response.json();
        console.log("top3", response);
        setPjtEnCours("");
        setPjtDt(false);
        setForGet(!forGet);
      })

      .catch((error) => {
        console.log(error);
      });

    console.log("top4");
  };

  /////////////////////////////////////////////////////////

  return (
    <div>
      <Navbar />
      <h1>Mon tableau de bord</h1>
      <br />
      {!pjtDt && (
        <div>
          <button onClick={initNew}>Nouveau Projet</button>
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
        </div>
      )}

      <div id="projectDetail" ref={projectDetail}>
        {pjtDt && (
          <ProjectForm
            pjtDetail={pjtEnCours}
            pjtUpdate={handleValid}
            pjtReturn={handleAnnul}
          />
        )}
      </div>
    </div>
  );
};

export default MyData;
