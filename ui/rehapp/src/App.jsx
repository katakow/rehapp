/* eslint-disable func-names */
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./coponents/Footer";
import Start from "./pages/Start";
import Main from "./pages/Main";
import RegisterForm1 from "./pages/user/register/RegisterForm1";
import RegisterForm2 from "./pages/user/register/RegisterForm2";
import ErrorPage from "./pages/ErrorPage";
import Info from "./pages/Info";
import RegisterForm3 from "./pages/user/register/RegisterForm3";
import RegisterEnd from "./pages/user/register/RegisterEnd";
import DocMain from "./pages/doc/DocMain";
import DocProfile from "./pages/doc/DocProfile";
import DocInfo from "./pages/doc/DocInfo";
import DocEdit from "./pages/doc/DocEdit";
import DocPatients from "./pages/doc/DocPatients";
import DocEditPatient from "./pages/doc/DocEditPatient";
import UserProfile from "./pages/user/UserProfile";
import UserAllData from "./pages/user/register/FormEnd";
import UserMain from "./pages/user/UserMain";
import UserInfo from "./pages/user/UserInfo";
import UserExam from "./pages/user/UserExam";
import UserExam2 from "./pages/user/UserExam2";
import UserRec from "./pages/user/UserRec";
import UserEdit from "./pages/user/UserEdit";
import RegisterDoc from "./pages/doc/RegisterDoc";
import RegisterDefault from "./pages/user/register/RegisterDefault";

const App = function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/main" element={<Main />} />
        <Route path="/info" element={<Info />} />
        <Route path="/register" element={<RegisterDefault />} />
        <Route path="/register/1" element={<RegisterForm1 />} />
        <Route path="/register/2" element={<RegisterForm2 />} />
        <Route path="/register/3" element={<RegisterForm3 />} />
        <Route path="/allData/all" element={<UserAllData />} />
        <Route path="/register/end" element={<RegisterEnd />} />

        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/profileEdit" element={<UserEdit />} />
        <Route path="/user/main" element={<UserMain />} />
        <Route path="/user/info" element={<UserInfo />} />
        <Route path="/user/rec" element={<UserRec />} />
        <Route path="/user/exam" element={<UserExam />} />
        <Route path="/user/exam2" element={<UserExam2 />} />

        <Route path="/doc/main" element={<DocMain />} />
        <Route path="/doc/profile" element={<DocProfile />} />
        <Route path="/doc/patients" element={<DocPatients />} />
        <Route path="/doc/patientsEdit" element={<DocEditPatient />} />
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
