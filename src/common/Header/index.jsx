import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Image from "../../component/image";
import Text from "../Text";
import { Link } from "react-router-dom";
import { useAuthentication } from "../../context/authContext";
import { getData } from "../../utils/api";
import {
  PINNTAG_BUSINESS_PROFILE,
  PINNTAG_USER,
} from "../../config/routes/RoleProtectedRoute";
import { removeItem } from "../../utils/localStorage";

const Header = () => {
  const { user, businessUser, setBusinessUser, setUser } = useAuthentication();

  const switchToUserProfile = async () => {
    const res = await getData("auth/switch/profile");
    if (res?.data) {
      setUser(res.data);
      setBusinessUser();
      removeItem(PINNTAG_BUSINESS_PROFILE);
      localStorage.setItem(PINNTAG_USER, JSON.stringify(res.data));
    } else {
      console.error(res.error, "error while switching profile");
    }
  };

  return (
    <div className=" bg-white absolute top-0 shadow-lg justify-between items-center flex w-full h-[72px] px-6 ">
      {/* company details  */}
      <div className="flex space-x-2 items-center ml-[200px]">
        <Image
          src={"/assets/images/mainlogo.svg"}
          alt="mainlogo"
          className={"mob:!h-[60px] mob:!w-[60px] w-[44px] "}
        />
        <div className="flex flex-col justify-center">
          <Text className="text-caption font-ubuntu">My business</Text>
          <Text className="text-h2 font-ubuntu">The Buff Restaurant</Text>
        </div>
      </div>

      {/* user detail */}
      <div className="flex justify-center  w-fit h-fit items-center space-x-7  p-2 mr-8">
        <NotificationsIcon />
        <div className="h-[30px] border border-[#DCE4E8]" />
        <div className="mob:text-[14px]">
          {user ? (
            <div className="flex gap-2 items-center">
              
                <Image
                  src={"/assets/images/ProfileIcon.svg"}
                  alt="mainlogo"
                  className={"mob:!h-[60px] mob:!w-[60px] w-[44px] "}
                />{" "}
                <Text className="text-white">
                {user?.user?.firstName}
              </Text>
              {businessUser ? (
                <div onClick={switchToUserProfile}>
                    <ArrowDropDownIcon  />
                </div>
               
                // <Text className="text-white">
                //   <span
                //     onClick={switchToUserProfile}
                //     className="ml-2 underline cursor-pointer"
                //   >
                //     Switch user
                   
                //   </span>
                // </Text>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <Link to="/login">
              {/* <Text className="underline text-white">Sign In</Text> */}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
