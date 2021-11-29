/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import * as React from "react";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Buttons = function ({ title }) {
  return (
    <Button variant="text" className="button1">
      {" "}
      {title}{" "}
    </Button>
  );
};

// eslint-disable-next-line no-use-before-define
Buttons.defaultProps = {
  title:
    "jeśli chcesz dowiedzieć się więcej na temat COvid-19, kliklnij tutaj!",
};

export default Buttons;
