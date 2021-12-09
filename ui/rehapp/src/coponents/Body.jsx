/* eslint-disable func-names */
/* eslint-disable react/prop-types */

import { Container, Grid } from "@mui/material";
import Button1 from "./Button1";
import Button2 from "./Button2";

const Body = function ({ title }) {
  return (
    <div>
      <body>
        <Container maxWidth="lg">
          <h1 className="body" align="center">
            {title}
          </h1>
        </Container>
      </body>
      <Grid container spacing={10} marginTop="250px">
        <Grid item>
          <button1>
            <Button1> </Button1>
          </button1>
        </Grid>
        <Grid item>
          <button2>
            <Button2> </Button2>
          </button2>
        </Grid>
      </Grid>
    </div>
  );
};

Body.defaultProps = {
  title:
    "Rejestrując się do naszej aplikacji dowiesz się, " +
    "jakie badania warto wykonać po przejściu COVID-19, jaka dieta jest dla Ciebie najlepsza," +
    "a także jakie ćwiczenia warto wykonywać, by polepszyć jakość życia." +
    "\n Zapraszamy!",
};
export default Body;
