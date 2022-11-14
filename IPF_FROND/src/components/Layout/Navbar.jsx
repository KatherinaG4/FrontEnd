import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="fondoNav p-3">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            ></a>
            <p className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"></p>
            <div className="contenedor-botones text-end">
              <Link to="/login">
                <button
                  type="submit"
                  className="botoncito btn btn-outline-light me-2"
                >
                  <span>Iniciar Sesión</span>

                  <svg>
                    <rect x="0" y="0" fill="none"></rect>
                  </svg>
                </button>
              </Link>
              <Link to="/register">
                <button type="submit" className="botoncito btn btn-primary">
                  <span>Registrarse</span>
                  <svg>
                    <rect x="0" y="0" fill="none"></rect>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
