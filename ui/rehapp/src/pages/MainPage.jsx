/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */

import { Container } from "@mui/material";
import Button1 from "../coponents/Button1";
import Button2 from "../coponents/Button2";

const MainPage = function ({ title }) {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <body>
      <Container maxWidth="lg">
        <h1 className="body" align="center">
          {title}
        </h1>
      </Container>
      <Container align="center" top="100px">
        <button1>
          <Button1 onClick={onClick}> </Button1>
        </button1>
        <button2>
          <Button2> </Button2>
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