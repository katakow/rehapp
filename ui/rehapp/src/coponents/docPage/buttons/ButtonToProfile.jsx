import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ButtonToDocProf = function () {
  const navigate = useNavigate();
  return (
    <Button
      item
      variant="outlined"
      sx={{
        width: "204px",
        height: "95px",
        color: "black",
        backgroundColor: "rgba(106, 144, 100, 0.37)",
        fontFamily: "Sora",
        borderColor: "rgba(106, 144, 100, 0.37)",
      }}
      onClick={() => {
        navigate("/doc/main");
      }}
    >
      PRZEJDŹ DO STRONY GŁÓWNEJ
    </Button>
  );
};

export default ButtonToDocProf;
