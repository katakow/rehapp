/* eslint-disable no-use-before-define */
/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
import PropTypes from "prop-types";

const Body = function ({ title }) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <body>
      <h1 style={bodyStyle}>{title}</h1>
    </body>
  );
};

Body.defaultProps = {
  title:
    // eslint-disable-next-line no-multi-str
    "Rejestrując się do naszej aplikacji dowiesz się,\
    jakie badania warto wykonać po przejściu COVID-19, jaka dieta jest dla Ciebie najlepsza,\
    a także jakie ćwiczenia warto wykonywać, by polepszyć jakość życia.\
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
