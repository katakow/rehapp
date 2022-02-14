/* eslint-disable react/function-component-definition */
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import MedicationIcon from "@mui/icons-material/Medication";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";

export default function SimpleBottomNavigation() {
  const navigate = useNavigate();

  return (
    <Box className="navbarek">
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Strona główna"
          icon={
            <HomeIcon
              sx={{ color: "rgba(253, 105, 139, 0.85)", fontSize: "40px" }}
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
              sx={{ color: "rgba(253, 105, 139, 0.85)", fontSize: "40px" }}
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
              sx={{ color: "rgba(253, 105, 139, 0.85)", fontSize: "40px" }}
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
              sx={{ color: "rgba(253, 105, 139, 0.85)", fontSize: "40px" }}
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
              sx={{ color: "rgba(253, 105, 139, 0.85)", fontSize: "40px" }}
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
              sx={{ color: "rgba(253, 105, 139, 0.85)", fontSize: "40px" }}
            />
          }
          onClick={() => {
            navigate("/main");
          }}
        />
      </BottomNavigation>
    </Box>
  );
}
