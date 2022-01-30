/* eslint-disable react/function-component-definition */
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import HealingIcon from "@mui/icons-material/Healing";
import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";

export default function SimpleBottomNavigation() {
  const navigate = useNavigate();

  return (
    <Box>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Strona główna"
          icon={
            <HomeIcon
              sx={{ color: "rgba(253, 105, 139, 0.85)", fontSize: "50px" }}
            />
          }
          onClick={() => {
            navigate("/doc/main");
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
            navigate("/doc/profile");
          }}
        />

        <BottomNavigationAction
          label="Pacjenci"
          icon={
            <HealingIcon
              sx={{ color: "rgba(253, 105, 139, 0.85)", fontSize: "50px" }}
            />
          }
          onClick={() => {
            navigate("/doc/patients");
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
            navigate("/doc/info");
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
