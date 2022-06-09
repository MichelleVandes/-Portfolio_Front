import React from "react";
import "../Style/ProjectListFront.css";

function ProjectList({ id, details, onCheck, onDelete }) {


  return (
    <div className="bg-secondary text-white col-md-4 col-lg-4 m-3 border border-danger">
      <h3 className="text-center">{details.title}</h3>
      <br />
      <div> {details.description}</div>
    </div>
  );
}


export default ProjectList;
