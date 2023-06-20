import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Protected from "./Auth/Protected";
import Home from "./Components/Home";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/home" element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route path="*" element={<Navigate to="/login"/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;