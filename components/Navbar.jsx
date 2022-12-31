import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Tienda de Libros
            <img src="../public/images/libro.png" className="logoLibro"></img>
          </NavLink>
          <NavLink className="navbar-brand" to="/cart">
            Carrito
            {/* <img src="../public/images/carrtio.png" className="logoLibro"></img> */}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Productos
                </a>
                
                <ul class="dropdown-menu">
                  <li>
                    <NavLink class="dropdown-item" to="/Novelas">
                      Novelas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="/Policiales">
                      Policiales
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="/Fantasía">
                      Fantasía
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

       
        </div>
      </nav>
      <main></main>
    </div>
  );
}
