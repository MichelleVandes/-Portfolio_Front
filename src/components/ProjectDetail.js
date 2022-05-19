import React, { useState, useEffect } from "react";
import "../Style/ProjectDetail.css";

const ProjectDetail = (props) => {
  // récupérationd des infos props dans des variables et State :
  const [newTitle, setNewTitle] = useState();
  useEffect(() => {
    setNewTitle(props.pjtDetail.title);
  }, [props]);
  const [newDescription, setNewDescription] = useState()
  useEffect(() =>{
      setNewDescription(props.pjtDetail.description);
  }, [props])
  const [newImageUrl, setNewImageUrl] = useState();
  useEffect(() => {
    setNewImageUrl(props.pjtDetail.imageUrl);
  }, [props])
  const id = props.pjtDetail._id
  let image = ''

  // Modification titre et description image

  const titleChange = (event) => {
    setNewTitle(event.currentTarget.value);
  };
  const descriptionChange = (event) => {
      setNewDescription(event.currentTarget.value)
  }
const imgChange = (event) => {
  setNewImageUrl(event.currentTarget.value);
      image = document.createElement("img");
      image.src = window.URL.createObjectURL(event.currentTarget.value);
}
  // Validation des données
  const handleSubmit = (event) => {
      event.preventDefaut()
      props.modifyPjt({ id, newTitle, newDescription, newImageUrl });

  };

  return (
    <div className=" border border-3 border-dark">
      <img src={image} alt={newTitle} />

      <form onSubmit={handleSubmit} className="form">
        <input
          type="file"
          name="fileInput"
          accept="image/*"
          onChange={imgChange}
        />
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
        <button className="add-btn">Confirmer</button>
      </form>
    </div>
  );
};

export default ProjectDetail;
