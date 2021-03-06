import { Button } from "@mui/material";

const StartButtonInfo = function () {
  return (
    <Button
      variant="text"
      sx={{
        width: 500,
        height: 200,
        color: "rgba(253, 105, 139, 0.85)",
        fontFamily: "Sora",
      }}
    >
      Jeśli chcesz dowiedzieć się więcej na temat COVID-19, kliknij tutaj!
    </Button>
  );
};

export default StartButtonInfo;
