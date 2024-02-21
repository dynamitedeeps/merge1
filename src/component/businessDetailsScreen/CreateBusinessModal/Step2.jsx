import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PhoneInput from "react-phone-input-2";

import PrimaryModalHeader from "../../../common/UiElements/PrimaryModalHeader";
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";
import { Add } from "@mui/icons-material";
import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";
import { INC, DEC } from "../../../utils/constants/commonConstants";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "react-phone-input-2/lib/material.css";

const Step2 = ({ handleStep, handleClose }) => {
    const [phone, setPhone] = useState("")
  return (
    <div>
      <PrimaryModalHeader>
        <>Add Business | Locations</>
      </PrimaryModalHeader>
      <div className="mb-3 flex gap-4 items-center">
        <h1 className="text-base font-semibold">Number of locations</h1>
        <div>
          <select
            className="secondary-select w-16 !border !text-sm !p-[2px] "
            name="type"
          >
            <option>1</option>
            <option value={"business_event"}>2</option>
            <option value={"social_event"}>3</option>
          </select>
        </div>
        <h1 className="text-lg font-bold text-[#45818E]">
          $720 <span className="font-semibold text-base">/year</span>
        </h1>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="text-base font-semibold ">Location Details</h1>
          <PrimaryButton
            onClick={
              () => {}
              // arrayHelpers.push({
              //   address1: "",
              //   address2: "",
              //   city: "",
              //   st: "",
              //   zip: "",
              //   website: "",
              //   email: "",
              //   telePhonenumber: "",
              // })
            }
          >
            <Add className="!text-white" />
            <span>Add</span>
          </PrimaryButton>
        </div>
        {/* {formik.values.locations?.map((location, index) => { */}
        {/* return ( */}
        <div className="mt-2 py-3 px-2 bg-[#0000000d] rounded-md">
          <div className="flex gap-2">
            <div className="w-[90%]">
              <div className="mb-2">
                <input
                  placeholder="Address 1"
                  // name={`locations[${index}].address1`}
                  // value={location.address1}
                  className="common-input !border"
                  // onChange={formik.handleChange}
                  // onBlur={handleBlur}
                />
                {/* <span className="font-semibold pl-1 text-sm text-red-600">
                        <ErrorMessage name={`locations[${index}].address1`} />
                      </span> */}
              </div>
              <div className="mb-2">
                <input
                  placeholder="Address 2"
                  // name={`locations[${index}].address2`}
                  // value={location.address2}
                  className="common-input !border"
                  // onChange={formik.handleChange}
                  // onBlur={handleBlur}
                />
                {/* <span className="font-semibold pl-1 text-sm text-red-600">
                        <ErrorMessage name={`locations[${index}].address2`} />
                      </span> */}
              </div>
              <div className="mb-2 flex gap-2">
                <div className="w-2/4">
                  <input
                    placeholder="City"
                    //   name={`locations[${index}].city`}
                    className="common-input !border"
                    //   value={location.city}
                    //   onChange={formik.handleChange}
                    //   onBlur={handleBlur}
                  />
                  {/* <span className="font-semibold pl-1 text-sm text-red-600">
                          <ErrorMessage name={`locations[${index}].city`} />
                        </span> */}
                </div>
                <div className="w-1/4">
                  <input
                    placeholder="ST"
                    //   value={location.state}
                    //   name={`locations[${index}].state`}
                    className="common-input !border"
                    //   onChange={formik.handleChange}
                    //   onBlur={handleBlur}
                  />
                  {/* <span className="font-semibold pl-1 text-sm text-red-600">
                          <ErrorMessage name={`locations[${index}].state`} />
                        </span> */}
                </div>
                <div className="w-1/4">
                  <input
                    //   value={location.zip}
                    placeholder="Zip"
                    //   name={`locations[${index}].zip`}
                    className="common-input !border"
                    //   onChange={formik.handleChange}
                    //   onBlur={handleBlur}
                  />
                  {/* <span className="font-semibold pl-1 text-sm text-red-600">
                          <ErrorMessage name={`locations[${index}].zip`} />
                        </span> */}
                </div>
              </div>
              <div className="mb-2">
                <input
                  // value={location?.website}
                  placeholder="Website"
                  // name={`locations[${index}].website`}
                  className="common-input !border"
                  // onChange={formik.handleChange}
                  // onBlur={handleBlur}
                />
                {/* <span className="font-semibold pl-1 text-sm text-red-600">
                        <ErrorMessage name={`locations[${index}].website`} />
                      </span> */}
              </div>
              <div className="mb-2">
                <input
                  // value={location.email}
                  placeholder="Email"
                  // name={`locations[${index}].email`}
                  className="common-input !border"
                  // onChange={formik.handleChange}
                  // onBlur={handleBlur}
                />
                {/* <span className="font-semibold pl-1 text-sm text-red-600">
                        <ErrorMessage name={`locations[${index}].email`} />
                      </span> */}
              </div>
              <div className="mb-2">
                <input
                  // value={location.phone}
                  placeholder="Telephone number"
                  // name={`locations[${index}].phone`}
                  className="common-input !border"
                  // onChange={formik.handleChange}
                  // onBlur={handleBlur}
                />
                {/* <span className="font-semibold pl-1 text-sm text-red-600">
                        <ErrorMessage name={`locations[${index}].phone`} />
                      </span> */}
              </div>
              <div className="">
                <PhoneInput
                  country={"us"}
                  value={phone}
                  inputClass="!w-full"
                //   containerClass="common-input !border"
                  onChange={(phone) => setPhone( phone )}
                />
              </div>
            </div>
            <div>
              <DeleteOutlineIcon
                className="cursor-pointer"
                onClick={() => {
                  // handleDeleteLocation(location._id, arrayHelpers, index);
                }}
              />
            </div>
          </div>
        </div>
        {/* ); */}
        {/* })} */}
      </div>

      <div className="flex justify-between items-center mt-3">
        <div>
          {true ? (
            <SecondaryButton onClick={() => handleClose()}>
              <>Cancel</>
            </SecondaryButton>
          ) : (
            <SecondaryButton onClick={() => handleStep(DEC)}>
              <>Back</>
            </SecondaryButton>
          )}
        </div>
        <div>
          {/* handleStep(INC) */}
          <PrimaryButton
            // loading={loading}
            inputClass={"min-w-[100px]"}
            onClick={() => handleStep(INC)}
            // onClick={formik.handleSubmit}
          >
            <span>Next</span>
            <ChevronRightIcon className="!text-white" />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Step2;
