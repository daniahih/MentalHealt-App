import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegistered, setIsRegistered] = useState(
    localStorage.getItem("isRegistered") === "true"
  );

  const handleRegister = () => {
    // save user email and password to local storage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("userName", name);

    // set isRegistered flag to true
    localStorage.setItem("isRegistered", "true");

    // clear email and password fields
    setEmail("");
    setPassword("");
    setIsRegistered(true);

    alert("Thank you for registering!");
  };

  if (isRegistered) {
    return (
      <>
        <Link to="/loginPage">Log in here.</Link>
      </>
    );
  } else {
    return (
      <div>
        <h2>Register</h2>
        <form>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleRegister}>
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to="/loginPage">Log in here.</Link>
        </p>
      </div>
    );
  }
}

export default RegisterPage;
