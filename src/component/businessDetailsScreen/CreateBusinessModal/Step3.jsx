import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import PrimaryModalHeader from "../../../common/UiElements/PrimaryModalHeader";
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";
import { Add } from "@mui/icons-material";
import { DEC, INC } from "../../../utils/constants/commonConstants";
import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";

const Step3 = ({ handleStep, handleClose }) => {
  return (
    <div >
      <PrimaryModalHeader inputClass="!mb-2">
        <>Add Business | Social Media</>
      </PrimaryModalHeader>
      <p className="text-sm mb-3">
        To publish PinnTag posts to your business social media platforms, add
        your social media login details. You can skip this step and add them
        later
      </p>
      <div>
        <div className="flex justify-between">
          <h1 className="text-base font-semibold ">Location Details</h1>
          <PrimaryButton>
            <Add className="!text-white" />
            <span>Add</span>
          </PrimaryButton>
        </div>
        <div className="mt-2 py-3 px-2 bg-[#0000000d] rounded-md">
          <div className="flex gap-2">
            <div className="w-[90%]">
              <div className="mb-2">
                <select
                  className="secondary-select w-full !border !text-base !p-[6px] "
                  name="type"
                >
                  <option>Social media app</option>
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

export default Step3;
