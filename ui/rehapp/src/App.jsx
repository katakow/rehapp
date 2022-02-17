/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable func-names */
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./coponents/Footer";
import Start from "./pages/Start";
import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";
import Info from "./pages/Info";
import DocMain from "./pages/doctor/DoctorMain";
import DocProfile from "./pages/doctor/DoctorProfile";
import DocInfo from "./pages/doctor/DoctorInfo";
import DocPatients from "./pages/doctor/DoctorSeeAllPatients";
import DocSeePatient from "./pages/doctor/DoctorSeePatient";
import UserProfile from "./pages/patient/PatientProfile";
import UserMain from "./pages/patient/PatientMain";
import UserInfo from "./pages/patient/PatientInfo";
import UserCheck from "./pages/patient/PatientTests";
import UserRec from "./pages/patient/PatientRecommendations";
import RegisterDoc from "./pages/doctor/DoctorRegister";
import RegisterDefault from "./pages/patient/PatientRegister";

export const UserContext = React.createContext({});
const App = function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/main" element={<Main />} />
        <Route path="/info" element={<Info />} />
        <Route path="/register" element={<RegisterDefault />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/main" element={<UserMain />} />
        <Route path="/user/info" element={<UserInfo />} />
        <Route path="/user/rec" element={<UserRec />} />
        <Route path="/user/check" element={<UserCheck />} />
        <Route path="/doc/main" element={<DocMain />} />
        <Route path="/doc/profile" element={<DocProfile />} />
        <Route path="/doc/patients" element={<DocPatients />} />
        <Route path="/doc/patientsEdit" element={<DocSeePatient />} />
        <Route path="/doc/info" element={<DocInfo />} />
        <Route path="/register/doc" element={<RegisterDoc />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
