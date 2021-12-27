import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Header from "./coponents/Header";
import Body from "./coponents/Body";
import Footer from "./coponents/Footer";
import About from "./coponents/About";

const App = function () {
  return (
    <Router>
      <Route path="/login" exact />
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
    </Router>
  );
};

export default App;
