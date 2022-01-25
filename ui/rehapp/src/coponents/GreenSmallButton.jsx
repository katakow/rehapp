import { Button } from "@mui/material";

const GreenSmallButton = function () {
  return (
    <Button
      item
      variant="outlined"
      sx={{
        width: "143px",
        height: "53px",
        color: "black",
        backgroundColor: "rgba(106, 144, 100, 0.37)",
        fontFamily: "Sora",
        borderColor: "rgba(106, 144, 100, 0.37)",
      }}
    >
      ZALOGUJ SIĘ
    </Button>
  );
};

export default GreenSmallButton;
