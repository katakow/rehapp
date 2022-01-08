/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import Button1 from "../coponents/Button1";
import Button2 from "../coponents/Button2";

const Login = function () {
  return (
    <body>
      <button1>
        <Button1 />
      </button1>
      <TextField id="standard-basic" label="username" variant="standard" />
      <button2>
        <Button2> Login </Button2>
      </button2>
    </body>
  );
};

export default Login;
