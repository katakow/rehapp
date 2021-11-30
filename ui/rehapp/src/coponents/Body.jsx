/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable no-multi-str */
import Buttons from "./Buttons";

const bodyStyle = {
  fontSize: 25,
  position: "absolute",
  width: 888,
  height: 153,
  left: 276,
  top: 221,
};

const Body = function ({ title }) {
  return (
    <body>
      <h1 style={bodyStyle}>{title}</h1>
      <Buttons className="myButton"> </Buttons>
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
