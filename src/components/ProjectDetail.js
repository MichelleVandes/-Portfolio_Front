import React, { useState, useEffect } from "react";
import "../Style/ProjectDetail.css";
import { useForm } from "react-hook-form";

const ProjectDetail = (props) => {
  const [newImageUrl, setNewImageUrl] = useState();
  useEffect(() => {
    setNewImageUrl(props.pjtDetail.imageUrl);
  }, [props]);
  const { register, handleSubmit } = useForm();
  const myTitle = props.pjtDetail.title;
  const myDescription = props.pjtDetail.description;
  //const myId = props.pjtDetail._id;

  const imageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setNewImageUrl(URL.createObjectURL(event.target.files[0]));
      console.log('top img');
    }
  };

  const onSubmit = (data) => {

     props.modifiePjt(data);
 
    console.log(props);
  };

  return (
    <div>
      <img src={newImageUrl} alt="preview" />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={imageChange}
            className="filetype"
            {...register("imageUrl")}
          />
        </div>

        <label htmlFor="title">Titre</label>
        <input
          className="title"
          type="text"
          placeholder="Titre du Projet"
          {...register("title")}
          defaultValue={myTitle}
        />
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            className="description"
            type="text"
            placeholder="Description du Projet"
            {...register("description")}
            defaultValue={myDescription}
          />
        </div>
        <button className="add-btn" type="submit">
          Confirmer
        </button>
        <button className="add-btn">Confirmer</button>
        {/* <input
          {...register("_id")}
          defaultValue={myId}
          style={{ display: "none" }}
        /> */}
      </form>
    </div>
  );
};

export default ProjectDetail;
