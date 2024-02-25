import React, { useState } from "react";
import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";
import { DEC } from "../../../utils/constants/commonConstants";
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";
import CheckBox from "../../../common/FormElements/CheckBox/CheckBox";
import { postData } from "../../../utils/api";
import { enqueueSnackbar } from "notistack";
import { formatErrorMessage } from "../../../utils/formatErrorMessage";

const Step6 = ({
  handleStep,
  handleClose,
  id,
  currentStep,
  fetchAllEvents,
  eventData,
}) => {
  const [postBoolean, setPostBoolean] = useState({
    facebook: false,
    twitter: false,
    instagram: false,
  });
  const handlePublishPost = async () => {
    const res = await postData(`event/social/post`, {
      eventId: id,
      ...postBoolean,
    });
    if (res.data) {
      enqueueSnackbar(res.data.message ?? "", {
        variant: "success",
      });
      handleClose();
    } else {
      enqueueSnackbar(
        res.error?.message
          ? formatErrorMessage(res.error?.message)
          : "Something went wrong",
        {
          variant: "error",
        }
      );
    }
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    // console.log(e, ">>>>>>>>", e.target.checked)
    setPostBoolean((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="flex flex-col h-full">
      <div>
        <h1 className="font-bold text-base mt-2">
          Your content will be published to PinnTag{" "}
        </h1>
        <h1 className="font-bold text-base mt-2">
          Would you like to post your content to your social media accounts ?
        </h1>
        <h1 className="font-semibold text-[#888] text-base mt-2">
          Please select additional platforms to post this content :
        </h1>

        <div className="mt-4">
          <div className="mb-3">
            <CheckBox
              label="Facebook"
              name="facebook"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CheckBox label="X" name="twitter" />
          </div>
          <div className="mb-3">
            <CheckBox label="Instagram" name="instagram" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-auto pb-3">
        <div>
          <SecondaryButton onClick={() => handleStep(DEC)}>
            <>Back</>
          </SecondaryButton>
        </div>
        <div>
          {/* handleStep(INC) */}
          <PrimaryButton
            // loading={loading}
            inputClass={"min-w-[100px]"}
            onClick={handlePublishPost}
          >
            <span>Publish</span>
            {/* <ChevronRightIcon className="!text-white" /> */}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Step6;
