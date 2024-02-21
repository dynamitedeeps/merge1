import React from "react";
import PersonIcon from "@mui/icons-material/Person";
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
      setUser(res.data)
      setBusinessUser();
      removeItem(PINNTAG_BUSINESS_PROFILE);
      localStorage.setItem(PINNTAG_USER, JSON.stringify(res.data));
    } else {
      console.error(res.error, "error while switching profile");
    }
  };

  return (
    <div className="bg-secondary z-50 fixed top-0  gap-3 flex w-full py-6 px-6 ">
      <Image
        src={"/assets/images/mainlogo.jpg"}
        alt="mainlogo"
        className={
          "rounded-full border-[5px] mt-auto mob:!h-[60px] mob:!w-[60px] w-[100px]  border-primary"
        }
      />
      <div className="flex flex-col mt-auto">
        <Text className="text-white font-semibold mob:text-[14px] text-[24px]">
          The Buff Restaurant
        </Text>
        <Text className="text-primary font-semibold text-[24px] mob:text-[10px]">
          Administration Portal
        </Text>
      </div>
      <div className="ml-auto flex items-end gap-9">
        <div className="flex flex-row gap-[10px] mob:gap-0 mob:items-center items-end  mob:flex-col-reverse ">
          <div className=" mob:text-[14px]">
            {user ? (
              <div className="flex">
                <Text className="text-white mr-3">
                  <PersonIcon /> {user?.user?.firstName}
                </Text>
                {businessUser ? (
                  <Text className="text-white mr-3 ">
                    |{" "}
                    <span
                      onClick={switchToUserProfile}
                      className="ml-2 underline cursor-pointer"
                    >
                      Switch to user
                    </span>
                  </Text>
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
          <Image
            src="/assets/images/LogoSign.svg"
            className={"w-[100px] mob:w-[50px]"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
