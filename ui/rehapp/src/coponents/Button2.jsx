/* eslint-disable no-use-before-define */
import { Button, Typography } from "@mui/material";

const Button2 = function () {
  return (
    <div>
      <Button variant="text">
        <Typography className="button2">
          Jeśli chcesz dołączyć do nas lub się zalogować, kliklnij tuaj!
        </Typography>
      </Button>
    </div>
  );
};

export default Button2;
