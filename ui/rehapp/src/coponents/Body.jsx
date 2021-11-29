/* eslint-disable react/prop-types */
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
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <body>
      <h1 style={bodyStyle}>{title}</h1>
      <Buttons />
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
export default Body;
