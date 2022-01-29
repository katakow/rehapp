/* eslint-disable func-names */
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./coponents/Footer";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Register from "./pages/register/Register";
import Register2 from "./pages/register/Register2";
import ErrorPage from "./pages/ErrorPage";
import Info from "./pages/Info";
import Register3 from "./pages/register/Register3";
import Register5 from "./pages/register/Register5";
import Register4 from "./pages/register/Register4";
import Register6 from "./pages/register/Register6";
import RegisterEnd from "./pages/register/RegisterEnd";
import UserProfile from "./pages/user/UserProfile";

const App = function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register2" element={<Register2 />} />
        <Route path="/register3" element={<Register3 />} />
        <Route path="/register4" element={<Register4 />} />
        <Route path="/register5" element={<Register5 />} />
        <Route path="/register6" element={<Register6 />} />
        <Route path="/registerEnd" element={<RegisterEnd />} />
        <Route path="/info" element={<Info />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
