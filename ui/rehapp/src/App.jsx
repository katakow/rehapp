import * as React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./coponents/Header";
import Body from "./coponents/Body";
import Footer from "./coponents/Footer";
import About from "./coponents/About";

const App = function () {
  return (
    <div>
      <Header />
      <div>
        <Body />
        <Routes>
          <Route path="/login" exact />
          <Route path="/about" component={About} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
