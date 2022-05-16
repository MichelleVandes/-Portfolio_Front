import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../Style/LoginForm.css"
import * as yup from "yup";

const validationSchema = yup
  .object()
  .shape({
    pseudo: yup.string().required("Renseigner Pseudo"),
    password: yup.string().required("Renseigner mot Passe"),
  })
  .required();

function LoginForm(props) {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    props.loginUser(data);
  };

  const { errors } = formState;
  return (
    <div className="container pt-4 ">
      <div className="row">
        <div className="col-md-2 offset-md-11 shadow">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center">Connexion</h2>
            <div className="form-group mb-3">
              <label htmlFor="pseudo">pseudo :</label>
              <input
                type="text"
                className="form-control"
                {...register("pseudo")}
                name="pseudo"
                id="pseudo"
              />
              <small className="text-danger">{errors.name?.message}</small>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">password :</label>
              <input
                type="password"
                className="form-control"
                {...register("password")}
                name="password"
                id="password"
              />
              <small className="text-danger">{errors.password?.message}</small>
            </div>

            <div className="form-group d-flex justify-content-center mt-4 justify-content-md-end gap-3">
              <button type="submit" className="btn btn-primary">
                S'inscrire
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => reset()}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
