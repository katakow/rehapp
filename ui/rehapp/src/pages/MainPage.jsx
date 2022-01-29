/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */

import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button1 from "../coponents/buttons/Button1";
import Button2 from "../coponents/buttons/Button2";
import Header from "../coponents/Header";

const MainPage = function ({ title }) {
  const navigate = useNavigate();
  return (
    <body>
      <Header />
      <Container maxWidth="lg">
        <h1 className="body" align="center">
          {title}
        </h1>
      </Container>
      <Container align="center" top="100px">
        <button1
          onClick={() => {
            navigate("/info");
          }}
        >
          <Button1 />
        </button1>
        <button2
          onClick={() => {
            navigate("/login");
          }}
        >
          <Button2 />
        </button2>
      </Container>
    </body>
  );
};

MainPage.defaultProps = {
  title:
    "Rejestrując się do naszej aplikacji dowiesz się, " +
    "jakie badania warto wykonać po przejściu COVID-19, jaka dieta jest dla Ciebie najlepsza, " +
    "a także jakie ćwiczenia warto wykonywać, by polepszyć jakość życia." +
    "\n Zapraszamy!",
};
export default MainPage;
