import React, { useState } from "react";
import { LoginPage } from "./LoginPage";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [register, setisRegister] = useState(false);

  const handleRegister = () => {
    // save user email and password to local storage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("useName", name);

    // clear email and password fields
    setEmail("");
    setPassword("");
    setisRegister(true);

    alert("Thank you for registering!");
    // show thank you message and redirect to login pag
  };
  if (register) {
    return (
      <>
        <LoginPage />
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
      </div>
    );
  }
}

export default RegisterPage;
