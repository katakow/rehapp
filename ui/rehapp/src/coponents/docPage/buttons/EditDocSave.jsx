import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EditDoc = function () {
  const navigate = useNavigate();
  return (
    <Button
      variant="outlined"
      sx={{
        width: "143px",
        height: "53px",
        color: "black",
        backgroundColor: "rgba(106, 144, 100, 0.37)",
        fontFamily: "Sora",
        borderColor: "rgba(106, 144, 100, 0.37)",
      }}
      onClick={() => {
        navigate("/doc/profile");
      }}
    >
      ZAPISZ
    </Button>
  );
};

export default EditDoc;
