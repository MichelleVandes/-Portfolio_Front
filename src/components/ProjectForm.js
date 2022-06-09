import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ProjectForm({ pjtDetail, pjtUpdate, pjtReturn }) {
  const [newImageUrl, setNewImageUrl] = useState();
  const { handleSubmit, register } = useForm({
    mode: "onTouched",
  });
  const myTitle = pjtDetail.title;
  const myDescription = pjtDetail.description;
  const myId = pjtDetail._id;

  const onSubmit = (data) => {
    console.log("data", data);
        // if (data.imageUrl[0]) {
        //   setNewImageUrl(URL.createObjectURL(data.imageUrl[0].name));
        //   console.log(
        //     "imageUrl 2",
        //     URL.createObjectURL(data.imageUrl[0])
        //   );
        //   data.imageUrl = data.imageUrl[0];
        // }
   
 

    let data2 = new FormData();
    const image = data.imageUrl[0];
    data2.append("id", "sendIDHere");
    data2.append("name", "sendNameHere");
    data2.append("image", image);
       pjtUpdate(data2);
  };
  // const imageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setNewImageUrl(URL.createObjectURL(event.target.files[0]));
  //     console.log("newImageUrl", newImageUrl);
  //   }
  // };

  return (
    <div>
      <img src={newImageUrl} alt="preview" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center">Description du Projet</h2>

        <input
          type="file"
          accept="image/*"
          className="filetype"
          {...register("imageUrl")}
        />
        <div className="form-group mb-3">
          <label htmlFor="title">Titre du Projet:</label>
          <input
            defaultValue={myTitle}
            type="text"
            className="form-control"
            {...register("title", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description:</label>
          <textarea
            type="texte"
            className="form-control"
            defaultValue={myDescription}
            {...register("description")}
          />
        </div>
        <input
          {...register("_id")}
          defaultValue={myId}
          style={{ display: "none" }}
        />
        <button>Valider</button>
        <button
          type="button"
          className="btn-danger"
          onClick={() => pjtReturn()}
        >
          Annuler
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;
