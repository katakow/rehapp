/* eslint-disable no-shadow */
import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import {
  Grid,
  Button,
  TextField,
  FormControl,
  FormLabel,
  InputLabel,
  Input,
} from "@mui/material";
import NavBar from "../../coponents/mainPages/NavBar";

const RegisterDefault = function () {
  const navigate = useNavigate();

  // zapisz dane usera
  const [patientData, setPatientData] = useState({
    FirstName: "",
    LastName: "",
    Mail: "",
    Password: "",
    Pesel: "",
    CovidTest: "",
    CovidCourse: "",
    Id: "",
  });
  const [error, setError] = useState(null);

  // dodawanie pacjenta do bazy

  const addPatient = async () => {
    fetch("http://localhost:5080/Patients/register", {
      headers: { accept: "*/*", "Content-Type": "application/json" },
      method: "POST",

      body: JSON.stringify({
        FirstName: patientData.FirstName,
        LastName: patientData.LastName,
        Email: patientData.Mail,
        Password: patientData.Password,
        Pesel: patientData.Pesel,
        CovidCourse: patientData.CovidCourse,
        CovidTest: patientData.CovidTest,
      }),
    })
      .then((res) => {
        if (res.status >= 400 && res.status < 600) {
          throw new Error("NIEPOPRAWNE DANE LOGOWANIA");
        }
        return res.json();
      })
      .then(
        (result) => {
          console.log(result);
          navigate("/main");
        },
        (error) => {
          setError(error);
        }
      );
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleDataChange = async () => {
    setPatientData();
    console.log(patientData);
    patientData.FirstName = document.getElementById("imie").value;
    patientData.LastName = document.getElementById("nazwisko").value;
    patientData.Mail = document.getElementById("mail").value;
    patientData.Password = document.getElementById("haslo").value;
    patientData.Pesel = document.getElementById("pesel").value;
    patientData.CovidCourse = document.getElementById("covid").value;
    patientData.CovidTest = document.getElementById("test").value;

    console.log(patientData);
    try {
      const response = await addPatient();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="bodyNav">REJESTRACJA</div>
      <h1 align="center">Wprowadź swoje dane :)</h1>
      <Grid container direction="column" spacing="100" alignContent="center">
        <Grid item>
          <Grid container direction="row" spacing="350" alignContent="center">
            <Grid item>
              <Grid container direction="column" justifyContent="center">
                <Grid item>
                  <TextField
                    fullWidth
                    id="imie"
                    label="imię"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    id="nazwisko"
                    label="nazwisko"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    id="mail"
                    label="mail"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    id="pesel"
                    label="pesel"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      hasło
                    </InputLabel>
                    <Input
                      id="haslo"
                      label="haslo"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton aria-label="toggle password visibility" />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" spacing="350" alignContent="center">
            <Grid item>
              <Grid
                container
                direction="column"
                spacing="50"
                alignContent="center"
              >
                <Grid item>
                  <FormLabel component="legend">
                    Czy kiedykolwiek miałeś pozytywny wynik testu na COVID-19?
                  </FormLabel>

                  <TextField
                    fullWidth
                    id="test"
                    label=" Wpisz 'tak' lub 'nie'"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  JEŚLI ODPOWIEDZIAŁAŚ / ODPOWIEDZIAŁEŚ PRZECZĄCO NA POWYŻSZE
                  PYTANIE WPISZ <strong>brak</strong>
                </Grid>
                <Grid item>
                  <FormLabel component="legend">
                    jak przeszłaś / przeszedłeś COVID-19?
                  </FormLabel>

                  <TextField
                    fullWidth
                    id="covid"
                    label=" Wpisz jedną opcję: 'bezobjawowo', 'lekko', 'średnio', 'ciężko', 'brak' "
                    variant="standard"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item alignSelf="center">
              <Button
                variant="outlined"
                sx={{
                  width: "204px",
                  height: "95px",
                  color: "black",
                  backgroundColor: "rgba(106, 144, 100, 0.37)",
                  fontFamily: "Sora",
                  borderColor: "rgba(106, 144, 100, 0.37)",
                }}
                onClick={() => {
                  handleDataChange();
                }}
              >
                PRZEJDŹ DO STRONY GŁÓWNEJ ABY SIĘ ZALOGOWAĆ
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterDefault;
