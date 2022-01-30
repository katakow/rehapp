/* eslint-disable react/prop-types */

import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";

const UserMain = function ({ title }) {
  return (
    <div>
      <NavBarekDoc />
      <h1 className="body5" align="center">
        {title}
      </h1>
    </div>
  );
};
UserMain.defaultProps = {
  title: "Witamy w trybie lekarza / specjalisty! ",
};
export default UserMain;
