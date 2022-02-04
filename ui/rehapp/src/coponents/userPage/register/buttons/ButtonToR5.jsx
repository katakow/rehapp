import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

const ButtonToR5 = function () {
  const navigate = useNavigate();
  return (
    <Button
      item
      variant="outlined"
      sx={{
        width: "160px",
        height: "53px",
        color: "black",
        backgroundColor: "rgba(106, 144, 100, 0.37)",
        fontFamily: "Sora",
        borderColor: "rgba(106, 144, 100, 0.37)",
      }}
      onClick={() => {
        navigate("/register/5");
      }}
    >
      NASTĘPNA STRONA
    </Button>
  );
};

export default ButtonToR5;
