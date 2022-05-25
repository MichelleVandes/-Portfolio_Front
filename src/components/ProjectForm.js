import React from "react";
import { useForm } from "react-hook-form";

function ProjectForm(props) {
  

  const { register, handleSubmit, reset } = useForm({
    mode: "onTouched",
  });
  const myTitle = props.pjtDetail.title;
  const myDescription = props.pjtDetail.description;


  const onSubmit = (data) => {
    props.modifiePjt(data);
    reset();
  };
    const onLogin = () => {
    
    };
 
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center">Description du Projet</h2>
        <div className="form-group mb-3">
          <label htmlFor="title">Titre du Projet:</label>
          <input defaultValue={myTitle} type="text" className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description:</label>
          <input type="texte" className="form-control" defaultValue={myDescription} />
        </div>

        <div className="btn-group d-flex justify-content-md-end mt-5">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => reset()}
          >
            Annuler
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => onLogin()}
          >
            Modifier
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;

