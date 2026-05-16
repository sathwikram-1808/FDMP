import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/auth.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "donor",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    try {
      const response = await API.post(
        "/auth/signup",
        formData
      );

      alert(response.data.message);

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Create Account</h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <select
          name="role"
          onChange={handleChange}
        >
          <option value="donor">
            Donor
          </option>

          <option value="volunteer">
            Volunteer
          </option>

          <option value="admin">
            Admin
          </option>
        </select>

        <br /><br />

        <button onClick={handleSignup}>
          Signup
        </button>

        <p>
          Already have an account?
          <Link to="/"> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;