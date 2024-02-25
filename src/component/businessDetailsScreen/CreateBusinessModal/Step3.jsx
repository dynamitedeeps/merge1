import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryModalHeader from "../../../common/UiElements/PrimaryModalHeader";
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";
import { Add } from "@mui/icons-material";
import { DEC, INC } from "../../../utils/constants/commonConstants";
import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";

const Step3 = ({ handleStep, handleClose }) => {
  return (
    <div>
    <div className="flex items-center justify-between">
        <p className="mb-3 text-subtitle font-semibold">
        Add Business | Social Media
        </p>
        <CloseIcon onClick={() => handleClose()} />
      </div>
      <p className="text-h2 font-bold text-[#020200] font-ubuntu mb-3">
        To publish PinnTag posts to your business social media platforms, add
        your social media login details. You can skip this step and add them
        later
      </p>
      <div>
       
       
        <div className=" relative mt-2 py-3 px-2 bg-[#FAFAFA] shadow-sm rounded-md">
        <div className=" absolute right-0 top-0  flex justify-end items-end p-1 ">
              <DeleteOutlineIcon
                className="cursor-pointer"
                onClick={() => {
                  // handleDeleteLocation(location._id, arrayHelpers, index);
                }}
              />
            </div>
          <div className=" w-full flex gap-2 mt-6">
            <div className="w-[100%]">
              <div className="mb-2">
                <select
                  className="secondary-select w-full !border !text-base !p-[6px] "
                  name="type"
                >
                  <option>Instagram</option>
                  <option value={"business_event"}>Facebook</option>
                  <option value={"social_event"}>Linked In</option>
                </select>
              </div>
              <div className="mb-2">
                <input placeholder="User ID" className="common-input !border" />
              </div>
              <div className="">
                <input
                  placeholder="Password"
                  className="common-input !border"
                />
              </div>
            </div>
          
          </div>
        </div>
        <div className="flex justify-between mt-6">
          {/* <h1 className="text-base font-semibold ">Location Details</h1> */}
          <PrimaryButton inputClass={'!bg-[#D3E9EB] !rounded-sm'}>
            <Add className="!text-[#009CA6] " />
            <span className="text-[#009CA6] font-ubuntu font-bold text-subtitle3">Add Social Media</span>
          </PrimaryButton>
        </div>
      </div>
      <div className="flex justify-end items-end  pb-3 space-x-6 mt-6">
        <div>
          {true ? (
            <SecondaryButton inputClass={"!bg-tertiaryDark !border-0 !rounded-full text-black w-[144px] h-[48px] text-[#74746E] font-bold"} onClick={() => handleClose()}>
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
            inputClass={"min-w-[144px]"}
            onClick={() => handleStep(INC)}
            // onClick={formik.handleSubmit}
          >
            <span>Next</span>
            {/* <ChevronRightIcon className="!text-white" /> */}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Step3;
