import React from "react";
import Header from "../Header";
import Sidepanal from "../Sidepanal";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-min-screen">
      <Header />

      <Sidepanal />
      <div className="w-[80%] md:ml-auto mt-[135PX] h-full ">
        {/* {children} */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
