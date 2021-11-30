/* eslint-disable no-use-before-define */
import { Button, Typography } from "@mui/material";

const Buttons = function () {
  return (
    <div>
      <Button variant="text">
        <Typography className="button1">
          jeśli chcesz dowiedzieć się więcej na temat COvid-19, kliklnij tutaj!
        </Typography>
      </Button>
    </div>
  );
};

export default Buttons;
