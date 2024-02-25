import React, { useEffect, useState } from "react";
import PrimarySwitch from "../../../common/FormElements/Switch/PrimarySwitch";
import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DEC, INC } from "../CreateContent";
import { ErrorMessage, FormikProvider, useFormik } from "formik";
import classNames from "classnames";
import { getData, postData } from "../../../utils/api";
import { enqueueSnackbar } from "notistack";
import { formatErrorMessage } from "../../../utils/formatErrorMessage";
import * as Yup from "yup";

const Step4 = ({
  handleStep,
  handleClose,
  id,
  currentStep,
  fetchAllEvents,
  eventData,
}) => {
  const [loading, setLoading] = useState(false);
  const [ageGroups, setAgeGroups] = useState([]);
  const validationSchema = Yup.object().shape({
    ageGroupsAllowed: Yup.array().min(1, "Minimum 1 age group is required."),
    targetGenders: Yup.array().min(1, "Minimum 1 gender is required."),
    promotionCode: Yup.string().required("Promotion code is required"),
    // participationCost: Yup.number("Participation cost must be number").required(
    //   "Participation cost is required"
    // ),
    participationCost: Yup.number()
      .typeError("Participation cost is number.")
      .positive("Must be a positive value")
      .required("Participation cost is required."),
    bookingUrl: Yup.string().required("Booking URL is required"),
    termsAndConditions: Yup.string().required(
      "Terms and condtions is required"
    ),
  });

  const getAgeGroups = async () => {
    const res = await getData("ages");
    if (res.data) {
      setAgeGroups(res.data.ages);
    } else {
      console.error("Something went error", res);
    }
  };

  const initData = {
    ageGroupsAllowed: [],
    targetGenders: [],
    promotionCode: "",
    isFree: false,
    participationCost: "",
    bookingUrl: "",
    notifyFollowers: true,
    RSVP: true,
    termsAndConditions: "",
  };

  useEffect(() => {
    getAgeGroups();
  }, []);

  useEffect(() => {
    if (eventData) {
      setValues({
        ...initData,
        ageGroupsAllowed: eventData?.ageGroupsAllowed?.map(({ _id }) => _id),
        targetGenders: eventData?.targetGenders,
        promotionCode: eventData?.promotionCode,
        isFree: eventData?.isFree,
        participationCost: eventData?.participationCost,
        bookingUrl: eventData?.bookingUrl,
        notifyFollowers: eventData?.notifyFollowers,
        RSVP: eventData?.RSVP,
        termsAndConditions: eventData?.termsAndConditions,
      });
    }
  }, [eventData]);

  const formik = useFormik({
    initialValues: initData,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);

      const res = await postData(`event/update/${id}`, {
        ...values,
        participationCost: values.participationCost * 1,
      });

      if (res.data) {

        enqueueSnackbar(res.data.message ?? "", {
          variant: "success",
        });
        fetchAllEvents();
        handleStep(INC)

        
        // handleStep(INC);
        // handleClose();
      } else {
        console.log(res, ">>>>>>");
        enqueueSnackbar(
          res.error?.message
            ? formatErrorMessage(res.error?.message)
            : "Something went wrong",
          {
            variant: "error",
          }
        );
      }

      setLoading(false);
    },
  });

  const { handleBlur, handleChange, values, setFieldValue, setValues } = formik;

  const handleGender = (gender) => {
    if (values.targetGenders.includes(gender)) {
      formik.setFieldValue("targetGenders", [
        ...values.targetGenders.filter((gen) => {
          return gen !== gender;
        }),
      ]);
    } else {
      formik.setFieldValue("targetGenders", [...values.targetGenders, gender]);
    }
  };

  const handleAgeGroups = (gender) => {
    if (values.ageGroupsAllowed.includes(gender)) {
      formik.setFieldValue("ageGroupsAllowed", [
        ...values.ageGroupsAllowed.filter((gen) => {
          return gen !== gender;
        }),
      ]);
    } else {
      formik.setFieldValue("ageGroupsAllowed", [
        ...values.ageGroupsAllowed,
        gender,
      ]);
    }
  };

  return (
    <>
      <FormikProvider value={formik}>
        <div>
          <div className="mb-6">
            <h1 className="text-black mb-3 font-bold">Target age groups</h1>
            <div className="grid grid-cols-3 gap-4">
              {ageGroups?.map((age) => {
                return (
                  <div
                    className={classNames([
                      "bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold capitalize",
                      {
                        "bg-[#e8e51a]": values.ageGroupsAllowed.includes(
                          age._id
                        ),
                      },
                    ])}
                    onClick={() => {
                      handleAgeGroups(age._id);
                    }}
                  >
                    {age.name}
                  </div>
                );
              })}
            </div>
            <span className="font-semibold pl-1 text-sm text-red-600">
              <ErrorMessage name="ageGroupsAllowed" />
            </span>
          </div>

          <hr className="mb-3 text-[#7C7C72]" />

          <div className="mb-6">
            <h1 className="text-black mb-3 font-bold">Target genders</h1>
            <div className="grid grid-cols-3 gap-4">
              <div
                className={classNames([
                  "bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold",
                  { "bg-[#e8e51a]": values.targetGenders.includes("male") },
                ])}
                onClick={() => {
                  handleGender("male");
                }}
              >
                Male
              </div>
              <div
                className={classNames([
                  "bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold",
                  { "bg-[#e8e51a]": values.targetGenders.includes("female") },
                ])}
                onClick={() => {
                  handleGender("female");
                }}
              >
                Female
              </div>
              <div
                className={classNames([
                  "bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold",
                  { "bg-[#e8e51a]": values.targetGenders.includes("other") },
                ])}
                onClick={() => {
                  handleGender("other");
                }}
              >
                Other
              </div>
            </div>
            <span className="font-semibold pl-1 text-sm text-red-600">
              <ErrorMessage name="targetGenders" />
            </span>
          </div>

          <hr className="mb-3 text-[#7C7C72]" />

          <div className="mb-6">
            <div>
              <h1 className="text-black mb-3 font-bold">Promotional Code</h1>
            </div>
            <div>
              <input
                type="text"
                name="promotionCode"
                onChange={handleChange}
                onBlur={handleBlur}
                className="model-input placeholder:text-[#7C7C72] placeholder:text-sm !border-[#DDDDD7] "
                placeholder="Enter your promo code here"
                value={values?.promotionCode}
              />
            </div>
            <span className="font-semibold pl-1 text-sm text-red-600">
              <ErrorMessage name="promotionCode" />
            </span>
          </div>

          <hr className="mb-3 text-[#7C7C72]" />

          <div className="mb-6 flex justify-between">
            <div>
              <h1 className="text-black font-bold">Free</h1>
              <p className="text-[#888] text-xs">
                Promote in a dedicated area of Pinntag
              </p>
            </div>
            <div>
              <PrimarySwitch
                onChange={(val) => setFieldValue("isFree", val)}
                onBlur={handleBlur}
                name="isFree"
                defaultValue={values?.isFree}
              />
            </div>
          </div>

          <hr className="mb-3 text-[#7C7C72]" />

          <div className="mb-6">
            <div>
              <h1 className="text-black mb-3 font-bold">Booking URL</h1>
            </div>
            <div>
              <input
                type="text"
                className="model-input placeholder:text-[#7C7C72] placeholder:text-sm !border-[#DDDDD7] "
                placeholder="https://yourlinkhere.com"
                onChange={handleChange}
                onBlur={handleBlur}
                name="bookingUrl"
                value={values?.bookingUrl}
              />
            </div>
            <span className="font-semibold pl-1 text-sm text-red-600">
              <ErrorMessage name="bookingUrl" />
            </span>
          </div>

          <hr className="mb-3 text-[#7C7C72]" />

          <div className="mb-6">
            <div>
              <h1 className="text-black mb-3 font-bold">Participation cost</h1>
            </div>
            <div>
              <input
                type="text"
                className="model-input placeholder:text-[#7C7C72] placeholder:text-sm !border-[#DDDDD7] "
                placeholder="Participation cost"
                onChange={handleChange}
                onBlur={handleBlur}
                name="participationCost"
                value={values?.participationCost}
              />
            </div>
            <span className="font-semibold pl-1 text-sm text-red-600">
              <ErrorMessage name="participationCost" />
            </span>
          </div>

          <hr className="mb-3 text-[#7C7C72]" />

          <div className="mb-6 flex justify-between">
            <div>
              <h1 className="text-black font-bold">Notfiy followers</h1>
              <p className="text-[#888] text-xs">
                Your followers will be notified of this event
              </p>
            </div>
            <div>
              <PrimarySwitch
                onChange={(val) => setFieldValue("notifyFollowers", val)}
                name="notifyFollowers"
                defaultValue={values.notifyFollowers}
              />
            </div>
          </div>

          <hr className="mb-3 text-[#7C7C72]" />

          <div className="mb-6 flex justify-between">
            <div>
              <h1 className="text-black font-bold">RSVP</h1>
              <p className="text-[#888] text-xs">
                You will recieve a notification for each attendance request. You
                will need to confirm each request.
              </p>
            </div>
            <div>
              <PrimarySwitch
                onChange={(val) => setFieldValue("RSVP", val)}
                defaultValue={values?.RSVP}
              />
            </div>
          </div>

          <hr className="mb-3 text-[#7C7C72]" />

          <div className="mb-6">
            <div>
              <h1 className="text-black mb-3 font-bold">Terms & Conditions</h1>
            </div>
            <div>
              <input
                type="text"
                className="model-input placeholder:text-[#7C7C72] placeholder:text-sm !border-[#DDDDD7] "
                placeholder="Paste here your terms and conditions text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.termsAndConditions}
                name="termsAndConditions"
              />
            </div>
            <span className="font-semibold pl-1 text-sm text-red-600">
              <ErrorMessage name="termsAndConditions" />
            </span>
          </div>
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
              loading={loading}
              inputClass={"min-w-[100px]"}
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              <span>Next</span>
              <ChevronRightIcon className="!text-white" />
            </PrimaryButton>
          </div>
        </div>
      </FormikProvider>
    </>
  );
};

export default Step4;
