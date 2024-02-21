import React, { useState } from "react";
import Text from "../../common/Text";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import SecondaryButton from "../../common/FormElements/Button/SecondaryButton";
import FullButton from "../../common/FormElements/Button/FullButton";

const EditUserForm = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="">
      <div className="mx-12 my-4">
        <Text className="text-[24px] mob:text-[16px] font-bold">
          User Details
        </Text>
        <p>Update your business persona</p>
        <div className="w-full border border-[#DCE4E8] mt-7"/>
      </div>
      <div className="mx-12">
        <div className="w-1/2">
          <div className="mb-4">
            <div className="flex flex-col border  rounded-lg border-black">
              <input
                name="firstName"
                className="placeholder:text-[black] py-2 px-4 text-lg border-0 outline-none rounded-2xl"
                placeholder="First Name"
                // onChange={handleChange}
                // onBlur={handleBlur}
              />
              <hr className=" border-black border" />
              <input
                name="lastName"
                className="placeholder:text-[black] py-2 px-4 text-lg border-0 outline-none rounded-2xl"
                placeholder="Last Name"
                // onChange={handleChange}
                // onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="mb-2">
            <select
              className="secondary-select w-full !border !text-base !p-[6px] "
              name="type"
            >
              <option>Country</option>
              <option value={"business_event"}>USA</option>
              <option value={"social_event"}>UK</option>
            </select>
          </div>
          <div className="mb-4 flex gap-2">
            <div className="w-2/4">
              <input
                placeholder="City"
                className="secondary-select w-full !border !text-base !p-[6px]"
              />
            </div>
            <div className="w-1/4">
              <input
                placeholder="ST"
                className="secondary-select w-full !border !text-base !p-[6px]"
              />
            </div>
            <div className="w-1/4">
              <input
                placeholder="Zip"
                className="secondary-select w-full !border !text-base !p-[6px]"
              />
            </div>
          </div>
          <div className="mb-2">
            <input
              placeholder="Email"
              className="secondary-select w-full !border !text-base !p-[6px]"
            />
          </div>
          <div className="">
            <PhoneInput
              country={"us"}
              value={phone}
              inputClass="!w-full secondary-select"
              // containerClass="common-input !border"
              onChange={(phone) => setPhone(phone)}
            />
          </div>
          <div className="mt-5">
            <h1 className="font-semibold text-lg mb-2">Security Information</h1>
            <div className="flex gap-2">
              <input
                type="password"
                placeholder="Password"
                className="secondary-select w-[65%] !border !text-base !p-[6px]"
              />
              <SecondaryButton inputClass={"w-[35%]"}>
                Change Password
              </SecondaryButton>
            </div>
          </div>
          <div className="mt-5">
            <FullButton inputClass={"bg-white text-[#45818E] border-2 border-[#45818E]"}>Save Details</FullButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserForm;
