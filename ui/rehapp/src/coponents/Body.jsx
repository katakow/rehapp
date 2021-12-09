/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable no-multi-str */
import { Container, Grid } from "@mui/material";
import Button1 from "./Button1";
import Button2 from "./Button2";

const Body = function ({ title }) {
  return (
    <body>
      <Container>
        <Container maxWidth="lg">
          <h1 className="body" align="center" position="center">
            {title}
          </h1>
        </Container>
        <Grid container spacing={10}>
          <Grid item>
            <Button1> </Button1>
          </Grid>
          <Grid item>
            <Button2> </Button2>
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
