/* eslint-disable react/function-component-definition */
import * as React from "react";
import Box from "@mui/material/Box";

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: 320,
        height: 250,
        backgroundColor: "rgba(106, 144, 100, 0.37)",
        color: "black",
        borderRadius: 15,
        marginTop: "500px",
      }}
    >
      <div className="box">
        W zakładce Mój profil możesz zobaczyć i edytować wszystkie dane
        wprowadzone przez Ciebie przy rejestracji.
      </div>
    </Box>
  );
}
