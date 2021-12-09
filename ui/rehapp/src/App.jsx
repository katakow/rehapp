import * as React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./coponents/Header";
import Body from "./coponents/Body";
import Footer from "./coponents/Footer";
import About from "./coponents/About";

const App = function () {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Body />
          <Routes path="/about" component={About} />
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
