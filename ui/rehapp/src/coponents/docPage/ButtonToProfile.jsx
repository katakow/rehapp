import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

const ButtonToR7 = function () {
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
        navigate("/docMain");
      }}
    >
      PRZEJDŹ DO STRONY GŁÓWNEJ
    </Button>
  );
};

export default ButtonToR7;
