import React from "react";
import Navbar from "../components/Navbar";
import ProjectListFront from "../components/ProjectListFront";
import "../Style/Home.css"

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
  let myUrl = "http://127.0.0.1:5002/project";

const Home = () => {
    const [myProjects, setMyProjects] = useState([]);
    useEffect(() => {
    //   fetch(myUrl, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => setMyProjects(data))
    //     .catch((error) => {
    //       alert(error);
    //     });

    axios.get(myUrl).then((res) => {
        console.log(res.data);
        setMyProjects(res.data)
    })
    .catch((error) => alert(error))
    }, []);

const handleDetail = () => {
    
}

  return (
    <div>
      <Navbar />
      <div className=" bg-secondary text-white text-center">
        <img
          className="d-block mx-auto img-fluid photo homeImg"
          src="/MichelleV.png"
          alt="Michelle Vandeschrick"
        />
        <h1 className="">
          Michelle Vandeschrick,
          <br />
          développeuse WEB- Full Stack
        </h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, in a
        consequuntur eligendi voluptatum fugiat ducimus. Reiciendis voluptatem
        sit asperiores necessitatibus tempora, hic ea vitae at praesentium totam
        ex in.
      </p>
        <ul className="">
          {myProjects.map((pjt) => (
            <ProjectListFront
              key={pjt._id}
              details={pjt}
              onCheck={handleDetail}
            />
          ))}
        </ul>
        <Footer/>
    </div>
  );
};

export default Home;
