import React, { useState } from "react";
import { ErrorMessage, Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

import CheckBox from "../../common/FormElements/CheckBox/CheckBox";
import PrimaryButton from "../../common/FormElements/Button/PrimaryButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SecondaryButton from "../../common/FormElements/Button/SecondaryButton";
import PrimaryModal from "../../common/Modal/PrimaryModal";
import { Add } from "@mui/icons-material";
import { postData } from "../../utils/api";
import { enqueueSnackbar } from "notistack";
import { formatErrorMessage } from "../../utils/formatErrorMessage";

const PHONE_REGX =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const AddBusiness = ({ open, handleClose, fetchAllBusinessDetails }) => {
  const [loading, setLoading] = useState(false);

  const initState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    createContent: false,
    publishContent: false,
    publishSocialMedia: false,
    manageBusinessUsers: false,
    editLocations: false,
    imageGallery: false,
    businessDetails: false,
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Too short!")
      .required("First name required."),
    lastName: Yup.string().min(3, "Too short!").required("Last name required."),
    phone: Yup.string()
      .matches(PHONE_REGX, "Phone number is not valid")
      .required("Mobile Number is required."),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: initState,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);

      const res = await postData("business-profile/create/staff/member", {
        ...values,
      });

      if (res.data) {
        enqueueSnackbar(res.data.message ?? "", {
          variant: "success",
        });
        fetchAllBusinessDetails();
        handleClose();
        resetForm();
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
      setLoading(false);

    },
  });

  const { handleBlur, handleChange, values } = formik;

  return (
    <PrimaryModal
      open={open}
      handleClose={() => {
        handleClose();
        formik.resetForm();
      }}
      modalClass="max-w-[500px]"
    >
      <FormikProvider value={formik}>
        <Form>
          <div className="pb-4 ">
            <h1 className="text-center font-medium text-xl">Add User</h1>
          </div>
          <div className="mb-3">
            <div className="flex flex-col border-2  rounded-2xl border-black">
              <input
                name="firstName"
                className="placeholder:text-[black] py-2 px-4 text-lg border-0 outline-none rounded-2xl"
                placeholder="First Name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <hr className=" border-black border" />
              <input
                name="lastName"
                className="placeholder:text-[black] py-2 px-4 text-lg border-0 outline-none rounded-2xl"
                placeholder="Last Name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <span className="font-semibold text-sm text-red-600">
              <ErrorMessage c name="firstName" />
            </span>
            <span className="font-semibold text-sm text-red-600 ">
              <ErrorMessage name="lastName" />
            </span>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="model-input"
              placeholder="Mobile Phone"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="font-semibold pl-1 text-sm text-red-600">
              <ErrorMessage name="phone" />
            </span>
          </div>
          <div className="mb-6">
            <input
              type="text"
              className="model-input"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="font-semibold pl-1 text-sm text-red-600">
              <ErrorMessage name="email" />
            </span>
          </div>
          <div>
            <h1 className="text-lg font-bold mb-3">User Privileges</h1>
            <div className="mb-3">
              <CheckBox
                label="Edit business details"
                onChange={handleChange}
                name="businessDetails"
                checked={values.businessDetails}
              />
            </div>
            <div className="mb-3">
              <CheckBox
                label="Create content"
                name="createContent"
                onChange={handleChange}
                checked={values.createContent}
              />
            </div>
            <div className="mb-3">
              <CheckBox
                label="Publish content"
                name="publishContent"
                onChange={handleChange}
                checked={values.publishContent}
              />
            </div>
            <div className="mb-3">
              <CheckBox
                checked={values.publishSocialMedia}
                label="Publish to social Media"
                name="publishSocialMedia"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CheckBox
                checked={values.imageGallery}
                label="Edit image gallery"
                name="imageGallery"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CheckBox
                label="Edit locations"
                name="editLocations"
                checked={values.editLocations}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CheckBox
                label="Manage business users"
                name="manageBusinessUsers"
                checked={values.manageBusinessUsers}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <div className="flex gap-2">
              <SecondaryButton onClick={() => handleClose()}>
                <>Cancel</>
              </SecondaryButton>
              {/* <SecondaryButton>
                <>Deactivate</>
              </SecondaryButton> */}
            </div>
            <div>
              <PrimaryButton
                onClick={formik.handleSubmit}
                loading={loading}
                inputClass={"min-w-[100px]"}
              >
                <span>Add</span>
                <Add className="!text-white" />
              </PrimaryButton>
            </div>
          </div>
        </Form>
      </FormikProvider>
    </PrimaryModal>
  );
};

export default AddBusiness;
