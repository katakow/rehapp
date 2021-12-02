/* eslint-disable no-use-before-define */
// eslint-disable-next-line func-names
import { Typography } from "@mui/material";

const Header = function () {
  return (
    <header className="header">
      <Typography className="headerText" fontSize="64px">
        WITAMY!
      </Typography>
    </header>
  );
};

export default Header;
