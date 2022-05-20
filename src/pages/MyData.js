import React, { useRef, useState} from "react";

//import {Navbar, Login, ProjectList} from "../components/index";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import ProjectList from "../components/ProjectList";
import ProjectDetail from "../components/ProjectDetail";
import useToken from "../components/useToken";
import "../Style/MyData.css";
const project = [
  {
    _id: "6274de7f53ee39169fc20bb3",
    title: "chouette concept",
    description: "premier projet de groupe 1",
    imageUrl: "MichelleV.png",
    createdAt: "2022-05-06T08:38:23.568Z",
    updatedAt: "2022-05-06T09:18:20.486Z",
    __v: 0,
  },
  {
    _id: "6274df8c8a6562b9dde3dc31",
    title: "test2 title",
    description: "description 1",
    imageUrl: "chemin 2",
    createdAt: "2022-05-06T08:42:52.929Z",
    updatedAt: "2022-05-06T08:42:52.929Z",
    __v: 0,
  },
];


const MyData = () => {
  const [pjtEnCours, setPjtEnCours] = useState("");
  const {token, setToken} = useToken()

  let hello;

  const projectDetail = useRef();
  const projectList = useRef();

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
    console.log("pjt", pjtEnCours);
  };

  const handleDelete = () => {};

  const handleSubmit = (data) => {
    console.log("data :", data);

    const myUrl = "http://localhost:8080/login";

    const myInitPost = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(myUrl, myInitPost)
      .then((response) => response.json())
      .then((data) => {
        console.log("App data.user.name :", data.user.name);

        //onUser(data.user.name);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  /////////////////////////////////////////////////////////

  return (
    <div>
      <Navbar />
      <p>{hello}</p>

      <h1>Mon tableau de bord</h1>
      <br />
      <ul ref={projectList} className="app-ul">
        {project.map((pjt) => (
          <ProjectList
            key={pjt._id}
            details={pjt}
            onCheck={handleDetail}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <div id="projectDetail" ref={projectDetail}>
        {pjtEnCours && (
          <ProjectDetail pjtDetail={pjtEnCours} handleSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default MyData;
