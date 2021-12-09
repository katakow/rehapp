/* eslint-disable no-use-before-define */
import { Button, Typography } from "@mui/material";

const Button1 = function () {
  return (
    <div>
      <Button variant="text" size="large">
        <Typography className="button1">
          Jeśli chcesz dowiedzieć się więcej na temat COvid-19, kliklnij tutaj!
        </Typography>
      </Button>
    </div>
  );
};

export default Button1;
