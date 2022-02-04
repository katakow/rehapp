import { Button } from "@mui/material";

const StartButtonMain = function () {
  return (
    <Button
      className="button2"
      variant="text"
      sx={{
        width: 480,
        height: 200,
        color: "rgba(106, 144, 100, 0.85)",
        fontFamily: "Sora",
      }}
    >
      Jeśli chcesz dołączyć do nas lub się zalogować, kliknij tutaj!
    </Button>
  );
};

export default StartButtonMain;
