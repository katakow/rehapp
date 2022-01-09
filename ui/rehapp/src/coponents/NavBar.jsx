/* eslint-disable react/function-component-definition */
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <navbar className="navbar">
      <Box sx={{ width: 50 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction icon={<ArrowBackIcon />} width="1440px" />
        </BottomNavigation>
      </Box>
    </navbar>
  );
}
