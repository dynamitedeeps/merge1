import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import PrimaryModal from "../../common/Modal/PrimaryModal";
import StepWizard from "./StepWizard";

import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import SecondaryButton from "../../common/FormElements/Button/SecondaryButton";
import PrimaryButton from "../../common/FormElements/Button/PrimaryButton";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";

import "./content.css";
import { getData } from "../../utils/api";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";

export const INC = "inc";
export const DEC = "dec";

const CreateContent = ({
  open,
  handleClose,
  fetchAllEvents,
  eventId,
  setEventId,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  // id is used to track making of current new event and eventId is used to tract the edit event
  const [id, setId] = useState("");
  const [eventData, setEventData] = useState();
  // 65bbd57c9cef5b960094aa95
  const handleStep = (type) => {
    if (currentStep === 6 && type === INC) {
      return;
    }
    if (type === INC) {
      setCurrentStep((prev) => prev + 1);
    } else if (type === DEC) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const fetchEventData = async (id) => {
    const resposne = await getData(`event/created/${eventId}`);
    if (resposne.data) {
      const eventData = resposne.data?.event;
      setEventData(eventData);
    } else {
      console.log(resposne.error, "Error while fetching business details");
    }
  };

  useEffect(() => {
    setId(eventId);
    if (eventId) {
      // setCurrentStep(2)
      fetchEventData(eventId);
    }
  }, [eventId]);

  const handleCloseModel = () => {
    handleClose();
    setId();
    setEventId();
    setEventData();
    setCurrentStep(1);
  };

  console.log(eventId, ">>>>>> eventId");
  return (
    <PrimaryModal
      open={open || !!id}
      handleClose={handleCloseModel}
      modalClass="w-[380px] sm:w-[500px] md:w-1/2 lg:w-2/5 xl:w-1/3"
    >
      <div className="flex flex-col h-full">
        <div className="pb-4">
          <h1 className="text-center font-medium text-xl">
            {currentStep === 5
              ? "Preview"
              : currentStep === 6
              ? "Post to Social Media"
              : "Create Content"}
          </h1>
        </div>
        {currentStep === 6 ? (
          <></>
        ) : (
          <div className="mb-3">
            <StepWizard step={currentStep - 1} />
          </div>
        )}

        {currentStep === 1 ? (
          <Step1
            handleStep={handleStep}
            handleClose={handleCloseModel}
            currentStep={currentStep}
            setId={setId}
            fetchAllEvents={fetchAllEvents}
            eventData={eventData}
            id={id}
            fetchEventData={fetchEventData}
          />
        ) : currentStep === 2 ? (
          <Step2
            handleStep={handleStep}
            handleClose={handleCloseModel}
            currentStep={currentStep}
            id={id}
            fetchAllEvents={fetchAllEvents}
            eventData={eventData}
            fetchEventData={fetchEventData}
          />
        ) : currentStep === 3 ? (
          <Step3
            handleStep={handleStep}
            handleClose={handleCloseModel}
            currentStep={currentStep}
            id={id}
            fetchAllEvents={fetchAllEvents}
            eventData={eventData}
            fetchEventData={fetchEventData}
          />
        ) : currentStep === 4 ? (
          <Step4
            handleStep={handleStep}
            handleClose={handleCloseModel}
            currentStep={currentStep}
            id={id}
            fetchAllEvents={fetchAllEvents}
            eventData={eventData}
            fetchEventData={fetchEventData}
          />
        ) : currentStep === 5 ? (
          <>
            <Step5
              handleStep={handleStep}
              handleClose={handleCloseModel}
              currentStep={currentStep}
              id={id}
              fetchAllEvents={fetchAllEvents}
              eventData={eventData}
              fetchEventData={fetchEventData}
            />
          </>
        ) : currentStep === 6 ? (
          <>
            <Step6
              handleStep={handleStep}
              handleClose={handleCloseModel}
              currentStep={currentStep}
              id={id}
              fetchAllEvents={fetchAllEvents}
              eventData={eventData}
              fetchEventData={fetchEventData}
            />
          </>
        ) : (
          <></>
        )}

        {/* <div className="flex justify-between items-center mt-auto">
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
            <PrimaryButton onClick={() => handleStep(INC)}>
              <span>Next</span>
              <ChevronRightIcon className="!text-white" />
            </PrimaryButton>
          </div>
        </div> */}
      </div>
    </PrimaryModal>
  );
};

export default CreateContent;
