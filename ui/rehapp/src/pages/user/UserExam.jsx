/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import NavBarek from "../../coponents/userPage/NavBarek";
import UserExamNext from "../../coponents/userPage/buttons/UserExamNext";

const UserExam = function ({ title }) {
  return (
    <div>
      <NavBarek />
      <Grid container direction="column" spacing="90px">
        <Grid item>
          <h1 align="center">{title}</h1>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            spacing="90px"
            justifyContent="center"
          >
            <Grid item>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="kaszel"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="katar"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="brak smaku"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="brak węchu"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="przymglenie"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="problemy z oddychaniem"
                />
              </FormGroup>
            </Grid>
            <Grid item>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="zmęczenie"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="brak skupienia"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="szybkie bicie serca"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="ból w klatce piersiowej"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="ból kości / stawów"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="ból głowy"
                />
              </FormGroup>
            </Grid>
            <Grid item>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="senność"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="gorączka"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="zaburzenia pamięci"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="biegunka"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="krew w moczu"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="krew w kale"
                />
              </FormGroup>
            </Grid>
            <Grid item>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="wysypka"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="ból gardła"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="zaczerwienione oczy"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="wysokie ciśnienie"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="duszności wysiłkowe"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "rgba(253, 105, 139, 0.85)",
                        },
                      }}
                    />
                  }
                  label="brak"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Grid>
        <Grid item alignSelf="flex-end">
          <UserExamNext />
        </Grid>
      </Grid>
    </div>
  );
};
UserExam.defaultProps = {
  title:
    "Pragniemy zaznaczyć, że wszystkie porady, które są widoczne na tej stronie nie są równoznaczne z wizytą u specjalisty. " +
    "Gdyby wystąpiły jakiekolwiek objawy niepokojące, należy niezwłocznie udać się do lekarza pierwszego kontaktu, " +
    "lub zadzwonić pod numer 999/112.",
};
export default UserExam;
