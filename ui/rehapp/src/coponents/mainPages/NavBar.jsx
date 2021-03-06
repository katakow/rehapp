/* eslint-disable react/function-component-definition */
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  return (
    <div className="navbarReg">
      <Box sx={{ width: 50 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
          onClick={() => {
            navigate("/main");
          }}
        >
          <BottomNavigationAction
            icon={
              <ArrowBackIcon
                sx={{
                  color: "rgba(253, 105, 139, 0.85)",
                  fontSize: "40px",
                }}
              />
            }
            width="1440px"
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
