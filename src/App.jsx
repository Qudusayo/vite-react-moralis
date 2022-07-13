import React from "react";
import reactLogo from "./assets/react.svg";
import moralisLogo from "./assets/moralis.svg";
import "./App.css";
import { useMoralis } from "react-moralis";

function App() {
  const { authenticate, logout, isAuthenticated, user } = useMoralis();

  const authUser = async () => {
    try {
      if (!isAuthenticated) {
        let user = await authenticate();
        console.log(user);
      } else {
        logout();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://moralis.io" target="_blank">
          <img src={moralisLogo} className="logo moralis" alt="Moralis logo" />
        </a>
      </div>
      <h1>Vite + React + Moralis</h1>
      <div className="card">
        <button onClick={authUser}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>
        <p>
          User ETH address will be displayed here.
          <br />
          <i>{user?.get("ethAddress")}</i>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite or React or Moralis logos to learn more
      </p>
    </div>
  );
}

export default App;
