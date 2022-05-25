import React from "react";
import "../Style/ProjectList.css";
import trash from "../images/trash-outline.svg"
import more from "../images/ellipsis-horizontal-sharp.svg";

function ProjectList({ id, details, onCheck, onDelete }) {


  return (
    <li className="col-md-4 offset-md-4">
      {details.title}
      <div>
        <button onClick={() => onCheck(details)}>
          <img src={more} alt="poubelle" height="20" />
        </button>

        <button onClick={() => onDelete(details._id)}>
          <img src={trash} alt="poubelle" height="20"  />
        </button>
      </div>
    </li>
  );
}


export default ProjectList;
