import { Button } from "@mui/material";

const Button1 = function () {
  return (
    <Button
      className="button1"
      variant="text"
      sx={{
        width: 500,
        height: 200,
        color: "rgba(253, 105, 139, 0.85)",
        fontFamily: "Sora",
      }}
    >
      Jeśli chcesz dowiedzieć się więcej na temat COvid-19, kliknij tutaj!
    </Button>
  );
};

export default Button1;
