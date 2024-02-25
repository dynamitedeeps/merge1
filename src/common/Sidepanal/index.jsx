import React, { useState } from "react";
import { sidepanalLinks } from "../../contentmanagement/sidepanal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { CloseRounded, MenuRounded } from "@mui/icons-material";
import { useAuthentication } from "../../context/authContext";
import { clearStorage } from "../../utils/localStorage";
import { MODULE } from "../../config/routes/RoleProtectedRoute";

const Sidepanal = () => {
  const location = useLocation();
  const [isPanalOpen, setIsPanalOpen] = useState(false);
  const navigate = useNavigate();

  const { user, setUser, businessUser, setBusinessUser } = useAuthentication();

  const handleLogout = () => {
    setUser(null);
    setBusinessUser(null);
    clearStorage();
    navigate("/login");
  };

  return (
    <>
      <div
        className={classNames(
          isPanalOpen ? "mob:w-full mob:h-full" : "mob:w-0 mob:px-0",
          "flex z-100 absolute top-0 transition-[width] duration-500 ease-in-out   mob:fixed  mob:z-40  flex-col gap-[20px] min-h-screen mob:left-0 mob:h-[calc(100vh-134px)] p-5 w-[200px] bg-pureBlack"
        )}
      >
         <div className=" w-full flex mb-10 "> 
             <p className=" text-tertiaryDark text-h3 font-redHat font-bold">Pinntag</p>
             <p className=" text-primary text-h3 font-bold font-redHat">Admin</p>
           </div>
        <div className="flex items-end justify-end w-full">
          <CloseRounded
            onClick={() => setIsPanalOpen(false)}
            className="stroke-[3px] md:!hidden"
          />
            
         
        </div>
     
        {user && (
          <>
            {sidepanalLinks.map((items) => {
              if (businessUser && items.module === MODULE.BUSINESS) {
                return (
                  <Link onClick={() => setIsPanalOpen(false)} to={items.Link}>
                    <div
                      className={classNames(
                        isPanalOpen ? "mob:block" : "mob:hidden",
                        location.pathname === items.Link
                          ? "bg-ButtonPrimary   text-white  "
                          : "hover:bg-tertiaryDark ",
                        "w-full transition-[display]  duration-500 ease-in-out  cursor-pointer  active:shadow-none  py-2 font-semibold "
                      )}
                    >
                      <div className="flex  w-full gap-2">
                        <img src={items.icons} alt="" className=" hover:text-white" /> 
                      <p className=" whitespace-nowrap">{items.Title}</p>
                      </div>
                     
                    </div>
                  </Link>
                );
              } else if (items.module === MODULE.USER && !businessUser) {
                return (
                  <Link onClick={() => setIsPanalOpen(false)} to={items.Link}>
                    <div
                      className={classNames(
                        isPanalOpen ? "mob:block" : "mob:hidden",
                        location.pathname === items.Link
                          ? " bg-ButtonPrimary text-white"
                          : "hover:bg-opacity-10 hover:bg-black",
                        "w-full  duration-500 ease-in-out  cursor-pointer  active:shadow-none shadow-lg rounded-lg py-2 font-semibold text-center border-2 border-secondary text-[20px]"
                      )}
                    >
                      {items.Title}
                    </div>
                  </Link>
                );
              }else{
                return <></>
              }
            })}

            <div
              className={classNames(
                isPanalOpen ? "mob:block" : "mob:hidden",
                "mt-auto w-full transition-[display] duration-500 ease-in-out  cursor-pointer  py-2 font-semibold text-center  text-[20px]"
              )}
              onClick={handleLogout}
            >
              Logout
            </div>
          </>
        )}
      </div>
      <div
        onClick={() => setIsPanalOpen(true)}
        className={classNames(
          isPanalOpen && "!hidden",
          "hidden  mob:flex w-[80px] justify-center items-center h-[80px] z-0 right-[20px] rounded-full mob:fixed  mob:z-40  flex-col gap-[20px]  bottom-[20px] p-5  bg-primary"
        )}
      >
        <MenuRounded className="!text-[40px]" />
      </div>
    </>
  );
};

export default Sidepanal;
