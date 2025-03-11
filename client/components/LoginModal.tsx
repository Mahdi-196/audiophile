import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import handleLogin from "../utils/Login";
import { handleRegister } from "../utils/RegisterUser";

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    if (isRegister) {
      const form = event.target as HTMLFormElement;
      const username = (form.elements.namedItem('username') as HTMLInputElement).value;
      const email = (form.elements.namedItem('email') as HTMLInputElement).value;
      const password = (form.elements.namedItem('password') as HTMLInputElement).value;
      await handleRegister({ username, email, password });
    } else {
      await handleLogin(event, subscribe, onClose);
    }
  };

  return (
    <div
      className="modal show d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{isRegister ? "Register" : "Login"}</h5>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {isRegister && (
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    required
                  />
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  required
                />
              </div>
              {!isRegister && (
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="subscribe"
                    checked={subscribe}
                    onChange={() => setSubscribe(!subscribe)}
                  />
                  <label className="form-check-label" htmlFor="subscribe">
                    Subscribe to newsletter
                  </label>
                </div>
              )}
              <button type="submit" className="btn btn-primary w-100">
                {isRegister ? "Register" : "Login"}
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? "Switch to Login" : "Switch to Register"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
