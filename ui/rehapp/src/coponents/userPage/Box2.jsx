/* eslint-disable react/function-component-definition */
import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

export default function BoxSx() {
  return (
    <Grid container direction="row" alignContent="center">
      <Box
        sx={{
          width: 320,
          height: 250,
          backgroundColor: "rgba(106, 144, 100, 0.37)",
          color: "black",
          borderRadius: 15,
          bottom: 200,
        }}
      >
        <div className="box">
          W zakładce Zalecenia dowiesz się m.in. jaka dieta będzie dla Ciebie
          najepsza lub jaką aktywność fizyczną najlepiej wykonywać.
        </div>
      </Box>
    </Grid>
  );
}
