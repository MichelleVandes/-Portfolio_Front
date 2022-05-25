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
    setNewDescription(props.pjtDetail.description);
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
    console.log("props :", props);
  };

  return (
    <div>
      <img src={newImageUrl} alt="preview" />
      <form className="form" onSubmit={handleSubmit}>
        <button className="add-btn" type="submit" onClick={handleSubmit}>
          Confirmer
        </button>
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
        <button className="add-btn" type="submit">
          Confirmer
        </button>
      </form>
    </div>
  );
};

export default ProjectDetail;
