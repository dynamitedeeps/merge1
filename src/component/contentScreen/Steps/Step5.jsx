import React from "react";
import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";
import { DEC, INC } from "../../../utils/constants/commonConstants";
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";

const Step5 = ({
  handleStep,
  handleClose,
  id,
  currentStep,
  fetchAllEvents,
  eventData,
}) => {
  return (
    <div className="flex flex-col h-full">
        <div>
            <h1>PREVIEW</h1>
        </div>
      <div className="flex justify-between items-center mt-auto pb-3">
        <div>
          {currentStep === 1 ? (
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
            onClick={() => {
                handleStep(INC)
              //   formik.handleSubmit();
            }}
          >
            <span>Submit</span>
            {/* <ChevronRightIcon className="!text-white" /> */}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Step5;
