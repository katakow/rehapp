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
                  label="brak w??chu"
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
                  label="zm??czenie"
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
                  label="b??l w klatce piersiowej"
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
                  label="b??l ko??ci / staw??w"
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
                  label="b??l g??owy"
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
                  label="senno????"
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
                  label="gor??czka"
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
                  label="zaburzenia pami??ci"
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
    "Pragniemy zaznaczy??, ??e wszystkie porady, kt??re s?? widoczne na tej stronie nie s?? r??wnoznaczne z wizyt?? u specjalisty. " +
    "Gdyby wyst??pi??y jakiekolwiek objawy niepokoj??ce, nale??y niezw??ocznie uda?? si?? do lekarza pierwszego kontaktu, " +
    "lub zadzwoni?? pod numer 999/112.",
};
export default UserExam;
