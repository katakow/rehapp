/* eslint-disable func-names */
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./coponents/Footer";
import Start from "./pages/Start";
import Main from "./pages/Main";
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
import UserEdit1 from "./pages/user/UserEdit1";
import UserEdit2 from "./pages/user/UserEdit2";
import RegisterDoc from "./pages/doc/RegisterDoc";

const App = function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/main" element={<Main />} />
        <Route path="/info" element={<Info />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/2" element={<Register2 />} />
        <Route path="/register/3" element={<Register3 />} />
        <Route path="/register/4" element={<Register4 />} />
        <Route path="/register/5" element={<Register5 />} />
        <Route path="/register/6" element={<Register6 />} />
        <Route path="/register/end" element={<RegisterEnd />} />

        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/profile2" element={<UserProfile2 />} />
        <Route path="/user/profile/edit" element={<UserEdit1 />} />
        <Route path="/user/profile2/edit" element={<UserEdit2 />} />
        <Route path="/user/main" element={<UserMain />} />
        <Route path="/user/info" element={<UserInfo />} />
        <Route path="/user/rec" element={<UserRec />} />
        <Route path="/user/exam" element={<UserExam />} />
        <Route path="/user/exam/2" element={<UserExam2 />} />

        <Route path="/doc/main" element={<DocMain />} />
        <Route path="/doc/profile" element={<DocProfile />} />
        <Route path="/doc/patients" element={<DocPatients />} />
        <Route path="/doc/patients/edit" element={<DocEditPatient />} />
        <Route path="/doc/info" element={<DocInfo />} />
        <Route path="/doc/edit" element={<DocEdit />} />
        <Route path="/register/doc" element={<RegisterDoc />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
