import { Navigate } from "react-router-dom";
import { useAuthentication } from "../../context/authContext";
import PrimaryLoader from "../../common/Loader/PrimaryLoader";

export const PINNTAG_USER = "pinntag-user";
export const PINNTAG_BUSINESS_PROFILE = "business-profile";

export const MODULE = {
  USER: "user",
  BUSINESS: "business",
};

const RoleProtectedRoute = ({ element, module }) => {
  const { user, isLoadingUser, businessUser } = useAuthentication();

  if (isLoadingUser) {
    return <PrimaryLoader />;
  }

  if (user && MODULE.USER === module && !businessUser) {
    return element;
  } else if (user && businessUser && MODULE.BUSINESS === module) {
    return element;
  } else {
    // return element;
    return <Navigate to={"/login"} />;
  }
};

export default RoleProtectedRoute;
