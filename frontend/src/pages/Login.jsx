import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/auth.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await API.post(
        "/auth/login",
        formData
      );

      // Store Token
      localStorage.setItem(
        "token",
        response.data.token
      );

      // Store User Data
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert(response.data.message);

      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h1>FDMP Login</h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p>
          Don't have an account?
          <Link to="/signup">
            {" "}Signup
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;