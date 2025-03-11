import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import handleLogin from "../../client/utils/Login";
import registerUser from "../../client/utils/RegisterUser";

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }: LoginProps) => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const originalFormdata = {
    username: '',
    email: '',
    password: '',
    subscribe: false
  }
  const [formData, setFormData] = useState(originalFormdata)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (isRegister) {
        await registerUser({ username: formData.username, email: formData.email, password: formData.password });
      } else {
        await handleLogin({ email: formData.email, password: formData.password, subscribe: formData.subscribe });
      }
      onClose(); // Call onClose after successful login or registration
    } catch {
      setError("An error occurred during login. Please try again.");
    }
  };

  const handleFormChange = (name: string, value: string | boolean) => {
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

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
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              {isRegister && (
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    name="username"
                    className="form-control"
                    required
                    onChange={(e) => handleFormChange(e.target.name, e.target.value)}
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
                  value={formData.email}
                  name="email"
                  className="form-control"
                  required
                  onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  name="password"
                  className="form-control"
                  required
                  onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                />
              </div>
              {!isRegister && (
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="subscribe"
                    checked={formData.subscribe}
                    name="subscribe"
                    onChange={(e) => handleFormChange(e.target.name, e.target.checked)}
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
