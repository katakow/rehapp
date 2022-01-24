import { TextField } from "@mui/material";

const LogIn = function () {
  return (
    <div>
      <TextField
        fullWidth
        id="standard-basic"
        label="e-mail / PESEL"
        variant="standard"
      />
      <TextField
        fullWidth
        id="standard-basic"
        label="hasło"
        variant="standard"
      />
    </div>
  );
};

export default LogIn;
