/* eslint-disable react/prop-types */
import NavBarek from "../../coponents/userPage/NavBarek";

const UserInfo = function ({ title }) {
  return (
    <div>
      <NavBarek />
      <h1 className="body5" align="center">
        {title}
      </h1>
    </div>
  );
};
UserInfo.defaultProps = {
  title:
    "Pragniemy zaznaczyć, że wszystkie porady, które są widoczne na tej stronie nie są równoznaczne z wizytą u specjalisty. " +
    "Gdyby wystąpiły jakiekolwiek objawy niepokojące, należy niezwłocznie udać się do lekarza pierwszego kontaktu, " +
    "lub zadzwonić pod numer 999/112.",
};
export default UserInfo;
