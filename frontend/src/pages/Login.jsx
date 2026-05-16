import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleLogin = async () => {
    try {

      const response =
        await API.post(
          "/auth/login",
          formData
        );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          response.data.user
        )
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
    <div className="
      min-h-screen
      flex
      justify-center
      items-center
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-black
      p-6
    ">

      <div className="
        w-full
        max-w-md
        glass
        p-10
        rounded-[32px]
        shadow-2xl
      ">

        <h1 className="
          text-5xl
          font-extrabold
          text-center
          bg-gradient-to-r
          from-cyan-400
          via-purple-500
          to-pink-500
          bg-clip-text
          text-transparent
          mb-10
        ">
          Login
        </h1>

        <div className="space-y-5">

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="
              w-full
              p-4
              rounded-2xl
              bg-white/10
              border
              border-white/10
              text-white
              placeholder-gray-300
              outline-none
              focus:border-cyan-400
            "
          />

          {/* PASSWORD */}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="
              w-full
              p-4
              rounded-2xl
              bg-white/10
              border
              border-white/10
              text-white
              placeholder-gray-300
              outline-none
              focus:border-cyan-400
            "
          />

          {/* BUTTON */}

          <button
            onClick={handleLogin}
            className="
              w-full
              py-4
              rounded-2xl
              text-white
              font-bold
              text-lg
              bg-gradient-to-r
              from-cyan-500
              via-blue-600
              to-purple-600
              hover:scale-[1.02]
              transition
              shadow-xl
            "
          >
            Login
          </button>

        </div>

        {/* SIGNUP LINK */}

        <p className="
          text-center
          text-gray-300
          mt-8
          text-lg
        ">
          Don't have an account?

          <Link
            to="/signup"
            className="
              text-cyan-400
              font-bold
              ml-2
              hover:text-cyan-300
            "
          >
            Signup
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;