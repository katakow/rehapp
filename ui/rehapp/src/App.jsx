/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable func-names */
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./coponents/Footer";
import Start from "./pages/Start";
import Main from "./pages/Main";
import Test from "./pages/Test";
import ErrorPage from "./pages/ErrorPage";
import Info from "./pages/Info";
import DocMain from "./pages/doc/DocMain";
import DocProfile from "./pages/doc/DocProfile";
import DocInfo from "./pages/doc/DocInfo";
import DocEdit from "./pages/doc/DocEdit";
import DocPatients from "./pages/doc/DocPatients";
import DocEditPatient from "./pages/doc/DocEditPatient";
import UserProfile from "./pages/user/UserProfile";
import UserMain from "./pages/user/UserMain";
import UserInfo from "./pages/user/UserInfo";
// import UserExam from "./pages/user/UserExam";
import UserCheck from "./pages/user/UserCheck";
import UserRec from "./pages/user/UserRec";
import UserEdit from "./pages/user/UserEdit";
import RegisterDoc from "./pages/doc/RegisterDoc";
import RegisterDefault from "./pages/user/RegisterDefault";

export const UserContext = React.createContext({});
const App = function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/main" element={<Main />} />
        <Route path="/info" element={<Info />} />
        <Route path="/register" element={<RegisterDefault />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/profileEdit" element={<UserEdit />} />
        <Route path="/user/main" element={<UserMain />} />
        <Route path="/user/info" element={<UserInfo />} />
        <Route path="/user/rec" element={<UserRec />} />
        {/* // <Route path="/user/exam" element={<UserExam />} /> */}
        <Route path="/user/check" element={<UserCheck />} />
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
