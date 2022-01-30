/* eslint-disable react/prop-types */

import NavBarekDoc from "../../coponents/docPage/NavBarekDoc";
import ListOfPatients from "../../coponents/docPage/ListOfPatients";

const DocPatients = function ({ title }) {
  return (
    <div>
      <NavBarekDoc />
      <h1 className="main" align="center">
        {title}
      </h1>
      <div className="center">
        <ListOfPatients />
      </div>
    </div>
  );
};
DocPatients.defaultProps = {
  title: "Wybierz pacjenta, którego zalecenia / badania chcesz edytować ",
};
export default DocPatients;
