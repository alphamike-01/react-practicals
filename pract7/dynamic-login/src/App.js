import React, { useState } from "react";
import "./App.css";

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [message, setMessage] = useState("");

  const checkLogin = () => {

    if (username === "admin" && password === "12345") {
      setLogin(true);
      setMessage("");
    } else {
      setMessage("Invalid Username or Password");
    }

  };

  return (

    <div className="container">

      {
        login ?

        <div>

          <h1>Welcome Admin</h1>

          <h3>Login Successful</h3>

          <button onClick={() => {

            setLogin(false);
            setUsername("");
            setPassword("");

          }}>

            Logout

          </button>

        </div>

        :

        <div>

          <h1>User Login</h1>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <br/><br/>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br/><br/>

          <button onClick={checkLogin}>
            Login
          </button>

          <p className="error">
            {message}
          </p>

        </div>

      }

    </div>

  );

}

export default App;