import { textAlign } from "@mui/system";
import PropTypes from "prop-types";

const Body = function ({ title }) {
  return (
    <body>
      <h1 style={bodyStyle}>{title}</h1>
    </body>
  );
};

Body.defaultProps = {
  title:
    "Rejestrując się do naszej aplikacji dowiesz się,\
    jakie badania warto wykonać po przejściu COVID-19, jak dieta jest dla Ciebie najlepsza,\
    a także jakie ćwiczenia warto wykonywać, by polepszyć jakoś życia.\
    \n Zapraszamy!",
};

Body.propTypes = {
  title: PropTypes.string.isRequired,
};

const bodyStyle = {
  color: "black",
  fontSize: 25,
  textAlign: "justify",
  position: "absolute",
  width: 888,
  height: 153,
  left: 276,
  top: 221,
};

export default Body;
