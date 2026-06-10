// Components/Auth.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Auth.module.css"; 

export default function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // detect active path
  const isSignupPath = location.pathname === "/signup";
  // state for tab
  const [isSignup, setIsSignup] = useState(isSignupPath);
  const [signupData, setSignupData] = useState({ username: "", email: "", password: "" });
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  // update on route change
  useEffect(() => {
    setIsSignup(isSignupPath);
    setErrorMsg("");
    setSignupData({ username: "", email: "", password: "" });
    setLoginData({ email: "", password: "" });
  }, [isSignupPath]);

  const toggleForm = () => {
    setIsSignup((prev) => !prev);
    setErrorMsg("");
    setSignupData({ username: "", email: "", password: "" });
    setLoginData({ email: "", password: "" });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const signup = () => {
    const { username, email, password } = signupData;
    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const usernameValid = /^[a-zA-Z]{3,}$/.test(trimmedUsername);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    const passwordValid = trimmedPassword.length >= 8 && trimmedPassword.length <= 15;

    if (!trimmedUsername || !trimmedEmail || !trimmedPassword) {
      setErrorMsg("⚠️ Please fill all fields.");
      return;
    }

    if (!usernameValid) {
      setErrorMsg("⚠️ Username must be at least 3 characters long and contain only letters.");
      return;
    }

    if (trimmedPassword.length > 15) {
      setErrorMsg("⚠️ Password should not exceed 15 characters.");
      return;
    }

    if (!emailValid) {
      setErrorMsg("⚠️ Please enter a valid email address.");
      return;
    }

    if (!passwordValid) {
      setErrorMsg("⚠️ Password must be at least 8 characters long.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((u) => u.username === trimmedUsername || u.email === trimmedEmail)) {
      setErrorMsg("⚠️ Username or Email already exists.");
      return;
    }

    users.push({ username: trimmedUsername, email: trimmedEmail, password: trimmedPassword });
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Sign up successful! Please login.");
    toggleForm();
  };

  const loginUser = () => {
    const { email, password } = loginData;
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmedEmail);

    if (!trimmedEmail || !trimmedPassword) {
      setErrorMsg("⚠️ Please fill all fields.");
      return;
    }

    if (!emailValid) {
      setErrorMsg("⚠️ Please enter a valid email address.");
      return;
    }

    if (trimmedPassword.length < 8) {
      setErrorMsg("⚠️ Password must be at least 8 characters.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (u) => u.email === trimmedEmail && u.password === trimmedPassword
    );

    if (!user) {
      setErrorMsg("❌ Invalid email or password.");
      return;
    }

    dispatch(login(user));
    sessionStorage.setItem("loggedInUser", JSON.stringify(user));

    navigate("/home");
  };

  return (
    <div className={styles.container}>
      {isSignup ? (
        <>
          <h2>🔑 Sign Up</h2>
          {errorMsg && <p className={styles.error}>{errorMsg}</p>}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={signupData.username}
            onChange={handleSignupChange}
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signupData.email}
            onChange={handleSignupChange}
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signupData.password}
            onChange={handleSignupChange}
            className={styles.input}
          />
          <button onClick={signup} className={styles.button}>
            Sign Up
          </button>
          <p onClick={toggleForm} className={styles.toggleText}>
            Already have an account? <span>Login</span>
          </p>
        </>
      ) : (
        <>
          <h2>🔒 Login</h2>
          {errorMsg && <p className={styles.error}>{errorMsg}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleLoginChange}
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
            className={styles.input}
          />
          <button onClick={loginUser} className={styles.button}>
            Login
          </button>
          <p onClick={toggleForm} className={styles.toggleText}>
            Don’t have an account? <span>Sign Up</span>
          </p>
        </>
      )}
    </div>
  );
}
