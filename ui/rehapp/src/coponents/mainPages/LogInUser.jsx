import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LogIn = function () {
  const navigate = useNavigate();
  return (
    <Grid container direction="column" spacing="40px">
      <Grid item>Zaloguj się</Grid>
      <Grid item>
        <TextField
          fullWidth
          id="standard-basic"
          label="e-mail / PESEL"
          variant="standard"
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          id="standard-basic"
          label="hasło"
          variant="standard"
        />
      </Grid>
      <Grid item>
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
          onClick={() => {
            navigate("/user/main");
          }}
        >
          ZALOGUJ SIĘ
        </Button>
      </Grid>
    </Grid>
  );
};

export default LogIn;
