/* eslint-disable func-names */
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./coponents/Header";
import Body from "./coponents/Body";
import Footer from "./coponents/Footer";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";

const App = function () {
  return (
    <div>
      <Header />
      <div>
        <Body />
        <Footer />
        <Routes>
          <Route path="/" component={MainPage} />
          <Route path="/login" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/login" component={Login} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
