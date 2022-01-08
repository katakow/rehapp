/* eslint-disable func-names */
/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Button1 = function ({ onClick }) {
  return (
    <Button
      onClick={onClick}
      className="button1"
      variant="text"
      sx={{
        width: 500,
        height: 200,
        color: "rgba(253, 105, 139, 0.85)",
        fontFamily: "Sora",
      }}
    >
      Jeśli chcesz dowiedzieć się więcej na temat COvid-19, kliknij tutaj!
    </Button>
  );
};

Button.defaultProps = {};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button1;
