import React from "react";
import { useForm } from "react-hook-form";

function ProjectForm({ pjtDetail, pjtUpdate, pjtReturn }) {
  const { handleSubmit, register } = useForm({
    mode: "onTouched",
  });
  const myTitle = pjtDetail.title;
  const myDescription = pjtDetail.description;
  const myId = pjtDetail._id;

  const onSubmit = (data) => {
    console.log(data);
    pjtUpdate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center">Description du Projet</h2>
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
