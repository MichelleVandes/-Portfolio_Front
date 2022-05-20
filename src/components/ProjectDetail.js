import React, { useState, useEffect } from "react";
import "../Style/ProjectDetail.css";

const ProjectDetail = (props) => {
 const [newTitle, setNewTitle] = useState();
 const [newDescription, setNewDescription] = useState();
  const [newImageUrl, setNewImageUrl] = useState();
const id = props.pjtDetail._id;


  // récupérationd des infos props dans des variables et State :
 
  useEffect(() => {
    setNewTitle(props.pjtDetail.title);
  }, [props]);
  
  useEffect(() => {
    setNewDescription(props.pjtDetail.description);
  }, [props]);


  useEffect(() => {
    setNewImageUrl(props.pjtDetail.imageUrl);
  }, [props]);

  // Modification titre et description image

  const titleChange = (event) => {
    setNewTitle(event.currentTarget.value);
  };
  const descriptionChange = (event) => {
    setNewDescription(event.currentTarget.value);
  };


const imageChange = (event) => {
  if (event.target.files && event.target.files[0]) {
    setNewImageUrl(URL.createObjectURL(event.target.files[0]));
  }
};

  // Validation des données
  const handleSubmit = (event) => {
    event.preventDefaut();
    props.modifyPjt({ id, newTitle, newDescription, newImageUrl });
  };

  return (
    <div>
      <img src={newImageUrl} alt="preview image" />
      <form className="form">
        <div>
          <input type="file" onChange={imageChange} className="filetype" />
        </div>
        <input
          className="title"
          value={newTitle}
          onChange={titleChange}
          type="text"
          placeholder="Titre du Projet"
        />
        <textarea
          className="description"
          value={newDescription}
          onChange={descriptionChange}
          type="text"
          placeholder="Description du Projet"
        />
        <button className="add-btn" onClick={handleSubmit}>Confirmer</button>
      </form>
    </div>
  );
};

export default ProjectDetail;
