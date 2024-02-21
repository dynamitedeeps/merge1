import React, { useState } from "react";
import PrimaryModal from "../../../common/Modal/PrimaryModal";
import Step1 from "./Step1";
import { INC, DEC } from "./../../../utils/constants/commonConstants";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const CreateBusinessModal = ({ open, handleClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleCloseModal = () => {
    handleClose();
  };

  const handleStep = (type) => {
    if (currentStep === 4 && type === INC) {
      return;
    }
    if (type === INC) {
      setCurrentStep((prev) => prev + 1);
    } else if (type === DEC) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <PrimaryModal
      open={open}
      handleClose={handleCloseModal}
      modalClass="w-[380px] sm:w-[500px] md:w-1/2 lg:w-2/5 xl:w-1/3 h-auto"
    >
      <div className="flex flex-col h-full">
        {currentStep === 1 ? (
          <>
            <Step1 handleStep={handleStep} handleClose={handleCloseModal} />
          </>
        ) : currentStep === 2 ? (
          <>
            <Step2 handleStep={handleStep} handleClose={handleCloseModal} />
          </>
        ) : currentStep === 3 ? (
          <>
            <Step3 handleStep={handleStep} handleClose={handleCloseModal} />
          </>
        ) : currentStep === 4 ? (
          <>
            <Step4 handleStep={handleStep} handleClose={handleCloseModal} />
          </>
        ) : (
          <></>
        )}
      </div>
    </PrimaryModal>
  );
};

export default CreateBusinessModal;

//tailgrids.com
