import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";
import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";
import { DEC, INC } from "../../../utils/constants/commonConstants";
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Step1 = ({ handleStep, handleClose }) => {
 
  const [isyearClick, setIsYearClick] = useState(true);
  const [isMonthlyClick, setIsMonthlyClick] = useState(false)

  const handleMonthlyClick = () => {
    setIsMonthlyClick(true);
    setIsYearClick(false)
  };

  const handleIsYearClick = () =>{
    setIsYearClick(true)
    setIsMonthlyClick(false)
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="mb-3 text-subtitle font-semibold">
          Add Business | Details
        </p>
        <CloseIcon onClick={() => handleClose()} />
      </div>

      <div className="">
        <div className="mb-3">
          <h1 className="text-base font-bold mb-3">Subscription type</h1>
          <div className="flex  items-center space-x-4">
            <button
              className={`${
                isyearClick
                  ? "bg-[#009CA6] text-white"
                  : "bg-tertiaryDark text-[#7C7C72]"
              } rounded-lg w-[109px] p-4`}
              onClick={handleIsYearClick}
            >
              <p>Yearly</p>
            </button>
            <button
              className={`${
                isMonthlyClick
                  ? "bg-[#009CA6] text-white"
                  : "bg-tertiaryDark text-[#7C7C72]"
              } rounded-lg w-[109px] p-4`}
              onClick={handleMonthlyClick}
            >
              <p>Monthly</p>
            </button>
            <p className=" text-[#009CA6]">$360 / year / location</p>
          </div>
          <div className="w-full border border-[#DDDDD7] mt-3"/>

        </div>
        <div className="mb-3 ">
          <select className="font-bold text-h2 w-full h-[56px] border border-[#DCE4E8] rounded-lg px-2 outline-none" name="type">
            <option className=" ">Type</option>
            <option value={"business_event"}>Business</option>
            <option value={"social_event"}>Non-Profit</option>
          </select>
        </div>
        <div className=" mb-3">
          <h1 className="text-base font-semibold">Image</h1>
          <label
            htmlFor="image"
            className="mt-3 cursor-pointer bg-[rgba(223,223,223,0.86)] text-[#45818E] w-full h-[107px] flex flex-col justify-center items-center  rounded-md text-sm font-semibold"
          >
            <ImageIcon className="text-[#666] !w-10 !h-10" />
            <span>Add Image</span>
          </label>
        </div>
        <div className="mb-3">
          <input
            placeholder="Business Name"
            name="title"
            className="common-input"
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Description"
            className="common-textarea"
            rows={3}
            // value={values?.description}
            // onBlur={handleBlur}
            name="description"
            // onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <select className="secondary-select w-full" name="type">
            <option>Category</option>
            <option value={"business_event"}>Category 1</option>
            <option value={"social_event"}>Category 2</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end items-end mt-auto pb-3 space-x-6">
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

export default Step1;
