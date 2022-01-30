import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

const GreenButtons = function () {
  const navigate = useNavigate();
  return (
    <div>
      Nie masz konta?
      <div>
        <Button
          item
          variant="outlined"
          sx={{
            width: "175px",
            height: "53px",
            color: "black",
            backgroundColor: "rgba(106, 144, 100, 0.37)",
            fontFamily: "Sora",
            borderColor: "rgba(106, 144, 100, 0.37)",
          }}
          onClick={() => {
            navigate("/register");
          }}
        >
          ZAREJESTRUJ SIĘ
        </Button>
      </div>
      <div>
        <Button
          item
          variant="outlined"
          sx={{
            width: "175px",
            height: "53px",
            color: "black",
            backgroundColor: "rgba(106, 144, 100, 0.37)",
            fontFamily: "Sora",
            borderColor: "rgba(106, 144, 100, 0.37)",
          }}
          onClick={() => {
            navigate("/register/doc");
          }}
        >
          ZAREJESTRUJ SIĘ JAKO LEKARZ
        </Button>
      </div>
    </div>
  );
};

export default GreenButtons;
