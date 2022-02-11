/* eslint-disable react/jsx-no-bind */
import { Grid, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

const LogIn = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  async function handleSubmit() {
    const request = {
      email,
      password,
    };
    await dispatch(request);
  }

  return (
    <Grid container direction="column" spacing="40px">
      <Grid item>Zaloguj się</Grid>
      <Grid item>
        <TextField
          fullWidth
          id="standard-basic"
          label="e-mail / PESEL"
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          id="standard-basic"
          label="hasło"
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Link to="/user/main">
          <Button
            item
            variant="outlined"
            sx={{
              width: "143px",
              height: "53px",
              color: "black",
              backgroundColor: "rgba(106, 144, 100, 0.37)",
              fontFamily: "Sora",
              borderColor: "rgba(106, 144, 100, 0.37)",
            }}
            onClick={handleSubmit}
          >
            ZALOGUJ SIĘ
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default LogIn;
