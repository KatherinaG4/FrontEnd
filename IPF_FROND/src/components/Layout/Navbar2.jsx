import React from "react";

const Navbar2 = () => {
  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            ></a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-secondary">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Historial Academico
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Avisos
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Perfil
                </a>
              </li>
            </ul>
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Cerrar Sesión
              </button>

            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar2;
