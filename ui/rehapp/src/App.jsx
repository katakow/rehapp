/* eslint-disable func-names */
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./coponents/Footer";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Register from "./pages/user/register/Register";
import Register2 from "./pages/user/register/Register2";
import ErrorPage from "./pages/ErrorPage";
import Info from "./pages/Info";
import Register3 from "./pages/user/register/Register3";
import Register5 from "./pages/user/register/Register5";
import Register4 from "./pages/user/register/Register4";
import Register6 from "./pages/user/register/Register6";
import RegisterEnd from "./pages/user/register/RegisterEnd";
import DocMain from "./pages/doc/DocMain";
import DocProfile from "./pages/doc/DocProfile";
import DocInfo from "./pages/doc/DocInfo";
import DocEdit from "./pages/doc/DocEdit";
import DocPatients from "./pages/doc/DocPatients";
import DocEditPatient from "./pages/doc/DocEditPatient";
import UserProfile from "./pages/user/UserProfile";
import UserProfile2 from "./pages/user/UserProfile2";
import UserMain from "./pages/user/UserMain";
import UserInfo from "./pages/user/UserInfo";
import UserExam from "./pages/user/UserExam";
import UserExam2 from "./pages/user/UserExam2";
import UserRec from "./pages/user/UserRec";
import RegisterDoc from "./pages/doc/RegisterDoc";

const App = function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<Info />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register2" element={<Register2 />} />
        <Route path="/register3" element={<Register3 />} />
        <Route path="/register4" element={<Register4 />} />
        <Route path="/register5" element={<Register5 />} />
        <Route path="/register6" element={<Register6 />} />
        <Route path="/registerEnd" element={<RegisterEnd />} />

        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/profile2" element={<UserProfile2 />} />
        <Route path="/userMain" element={<UserMain />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/userRec" element={<UserRec />} />
        <Route path="/userExam" element={<UserExam />} />
        <Route path="/userExam2" element={<UserExam2 />} />

        <Route path="/docMain" element={<DocMain />} />
        <Route path="/docProfile" element={<DocProfile />} />
        <Route path="/docPatients" element={<DocPatients />} />
        <Route path="/docEditPatient" element={<DocEditPatient />} />
        <Route path="/docInfo" element={<DocInfo />} />
        <Route path="/docEdit" element={<DocEdit />} />
        <Route path="/registerDoc" element={<RegisterDoc />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
