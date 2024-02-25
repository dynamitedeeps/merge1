import React from "react";
import { useAuthentication } from "../../context/authContext";
import { Navigate } from "react-router-dom";
import PrimaryLoader from "../../common/Loader/PrimaryLoader";

const GuestRoute = ({ element }) => {
  const { user, isLoadingUser, businessUser } = useAuthentication();

  if (isLoadingUser) {
    return <PrimaryLoader />;
  }

  if (user && !businessUser) {
    return <Navigate to="/dashboard/business-details" />;
  } else if(businessUser && user){
    return <Navigate to="/dashboard/image-gallery" />
  }else {
    return element;
  }
};

export default GuestRoute;
