import "bootstrap/dist/css/bootstrap.min.css"
import "./Home.css"
import { Link } from "react-router-dom";
import React, { useState } from "react"


export const Home = () => {
    let [authMode, setAuthMode] = useState("signin")
  
    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
  
    if (authMode === "signin") {
      return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                ¿No tiene una cuenta?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Registrarse
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Correo Electronico</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="EX: 12345@asdf.com"
                />
              </div>
              <div className="form-group mt-3">
                <label>Contraseña</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Contraseña"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <Link to="/crud">
                  <button type="submit" className="btn btn-primary">
                    Ingresar
                  </button>
                </Link>
              </div>
              <p className="text-center mt-2">
                <a href="#">¿Olvido la Contraseña?</a>
              </p>
            </div>
          </form>
        </div>
      )
    }
  
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Crear Cuenta</h3>
            <div className="text-center">
              ¿Ya posee una cuenta?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Ingresar
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Nombres</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="e.g Ana Maria"
              />
            </div>
            <div className="form-group mt-3">
              <label>Apellidos</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="e.g Perez Sanchez"
              />
            </div>
            <div className="form-group mt-3">
              <label>Correo Electronico</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="EX: 12345@asdf.com"
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Contraseña"
              />
            </div>
            <div className="form-group mt-3">
              <label>Repita su Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Contraseña"
              />
            </div>
            <div class="form-check d-flex align-items-start mb-3">
              <input class="form-check-input me-5" type="checkbox" value="" id="checkBoxId" name="check" oninput="this.className = ''" />
              <div>
                <label class="form-check-label" for="form2Example3">
                  Estoy de acuerdo con los <a href="{{ url_for('static', filename='Privacidad.pdf') }}">Terminos de Servicio</a>
                </label></div>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Crear Cuenta
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }