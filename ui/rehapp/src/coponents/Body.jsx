/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable no-multi-str */
import { Container, Grid } from "@mui/material";
import Buttons from "./Buttons";

const Body = function ({ title }) {
  return (
    <body>
      <Container>
        <Container maxWidth="lg" align="center">
          <h1 className="body" align="center" position="center">
            {title}
          </h1>
        </Container>
        <Grid container spacing={10}>
          <Grid item>
            <Buttons> </Buttons>
          </Grid>
          <Grid item>
            <Buttons> </Buttons>
          </Grid>
        </Grid>
      </Container>
    </body>
  );
};

Body.defaultProps = {
  title:
    "Rejestrując się do naszej aplikacji dowiesz się,\
    jakie badania warto wykonać po przejściu COVID-19, jaka dieta jest dla Ciebie najlepsza,\
    a także jakie ćwiczenia warto wykonywać, by polepszyć jakość życia.\
    \n Zapraszamy!",
};
export default Body;
