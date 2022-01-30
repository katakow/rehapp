/* eslint-disable react/function-component-definition */
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { createSvgIcon } from "@mui/material/utils";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import MedicationIcon from "@mui/icons-material/Medication";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  "Home"
);
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  return (
    <Box className="navbarek">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Strona główna"
          icon={
            <HomeIcon
              sx={{ color: "rgba(253, 105, 139, 0.85)", fontSize: "50px" }}
            />
          }
          onClick={() => {
            navigate("/user/main");
          }}
        />
        <BottomNavigationAction
          label="Mój profil"
          icon={
            <PersonIcon
              sx={{ color: "rgba(253, 105, 139, 0.85)", fontSize: "50px" }}
            />
          }
          onClick={() => {
            navigate("/user/profile");
          }}
        />
        <BottomNavigationAction
          label="Zalecenia"
          icon={
            <MedicationIcon
              sx={{ color: "rgba(253, 105, 139, 0.85)", fontSize: "50px" }}
            />
          }
          onClick={() => {
            navigate("/user/rec");
          }}
        />
        <BottomNavigationAction
          label="Badania"
          icon={
            <BloodtypeIcon
              sx={{ color: "rgba(253, 105, 139, 0.85)", fontSize: "50px" }}
            />
          }
          onClick={() => {
            navigate("/user/exam");
          }}
        />
        <BottomNavigationAction
          label="Informacje"
          icon={
            <InfoIcon
              sx={{ color: "rgba(253, 105, 139, 0.85)", fontSize: "50px" }}
            />
          }
          onClick={() => {
            navigate("/user/info");
          }}
        />
        <BottomNavigationAction
          label="Wyloguj"
          icon={
            <LogoutIcon
              sx={{ color: "rgba(253, 105, 139, 0.85)", fontSize: "50px" }}
            />
          }
          onClick={() => {
            navigate("/login");
          }}
        />
      </BottomNavigation>
    </Box>
  );
}
