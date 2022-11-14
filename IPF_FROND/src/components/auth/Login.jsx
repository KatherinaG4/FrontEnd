import React from 'react'
import { Link } from "react-router-dom";
import logi2 from '../../assets/logi2.gif'

const Login = () => {
  return (
    <div className="body">
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img src={logi2} className="brand_logo" alt="Logo" />
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name=""
                    className="form-control input_user"
                    value=""
                    placeholder="Nombre de Usuario"
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name=""
                    className="form-control input_pass"
                    value=""
                    placeholder="Contraseña"
                  />
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customControlInline"
                    />
                    <label
                      className="custom-control-label"
                      for="customControlInline"
                    >
                      Recordar
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="button" name="button" className="btn login_btn">
                    Iniciar Sesión
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                ¿No tienes cuenta aun?{" "}
                <Link to="#" className="linkss ml-2">
                  Registrate
                </Link>
              </div>
              <div className="d-flex justify-content-center links">
                <Link to="#" className="linkss">
                  ¿Has olvidado la contraseña?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login