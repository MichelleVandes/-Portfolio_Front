import React from "react";
import "../Style/ProjectList.css";
import trash from "../images/trash-outline.svg"
import {CgMoreAlt}  from "react-icons/cg";

function Todo({ id, details, onCheck, onDelete }) {


  return (
    <li className="col-md-4 offset-md-4">
      {details.title}
      <div>
        <button onClick={() => onCheck(details)}>
          <CgMoreAlt />
        </button>

        <button onClick={() => onDelete(details._id)}>
          <img src={trash} alt="poubelle" height="15" width="15" />
        </button>
      </div>
    </li>
  );
}


export default Todo;
