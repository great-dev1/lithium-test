import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import logo from '../assets/img/logo.svg';

const Home: FC = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const fullname = localStorage.getItem("user");

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        <div className="logo">
          <div className="m-3"><img src={logo} alt="logo"/></div>
        </div>
        <div>
          <button type="submit" className="buttons" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      <div className="container">
        <div
          className="row d-flex justify-content-center align-items-center text-center"
          style={{ height: "100vh" }}
        >
          <p className="muted display-6">Hey {fullname}</p>
        </div>
      </div>
    </>
  );
};
export default Home;