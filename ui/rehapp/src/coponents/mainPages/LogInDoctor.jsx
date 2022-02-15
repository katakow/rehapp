import { TextField, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LogInDoctor = function () {
  const navigate = useNavigate();
  return (
    <Grid container direction="column" spacing="40px">
      <Grid item>Zaloguj się jako lekarz</Grid>
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
            navigate("/doc/main");
          }}
        >
          ZALOGUJ SIĘ
        </Button>
      </Grid>
    </Grid>
  );
};

export default LogInDoctor;
