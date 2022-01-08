/* eslint-disable func-names */
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./coponents/Footer";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";

const App = function () {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
