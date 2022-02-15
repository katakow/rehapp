import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EditUser = function () {
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
        navigate("/user/profileEdit");
      }}
    >
      EDYTUJ
    </Button>
  );
};

export default EditUser;
