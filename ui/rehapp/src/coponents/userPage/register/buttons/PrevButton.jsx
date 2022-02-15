import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PrevBToR1 = function () {
  const navigate = useNavigate();
  return (
    <Button
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
        navigate(-1);
      }}
    >
      POPRZEDNIA STRONA
    </Button>
  );
};

export default PrevBToR1;
