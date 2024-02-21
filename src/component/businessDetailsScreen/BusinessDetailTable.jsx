import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Image from "../image";
import { useNavigate } from "react-router-dom";
import { businessStatus } from "../../utils/constants/statuses";
import PrimaryButton from "../../common/FormElements/Button/PrimaryButton";
import { getDataTemp } from "../../utils/api";
import { enqueueSnackbar } from "notistack";
import { formatErrorMessage } from "../../utils/formatErrorMessage";
import { useAuthentication } from "../../context/authContext";
import { PINNTAG_BUSINESS_PROFILE } from "../../config/routes/RoleProtectedRoute";
import ContentLoader from "../../common/Loader/contentLoader";

const BusinessDetailTable = ({ data, loader }) => {
  const { businessUser, setBusinessUser } = useAuthentication();
  const [loading, setLoading] = useState(false);
  const [businessId, setBusinessId] = useState(false);

  if (loader) {
    return <ContentLoader />;
  }

  // const navigate = useNavigate();

  const selectBusinessHandler = async (id) => {
    setBusinessId(id)
    setLoading(true);
    const res = await getDataTemp(`business-profile/switch/${id}`);
    if (res.data) {
      setBusinessUser(res.data);
      localStorage.setItem(PINNTAG_BUSINESS_PROFILE, JSON.stringify(res.data));
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
  };

  return (
    <>
      {/* {!loading && <SecondarLoader />} */}
      <div class="flex flex-col mx-12">
        {data?.length > 0 ? (
          <>
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-center text-sm font-light border-2 border-[#000000]">
                    <thead class=" bg-black text-white font-medium  dark:text-neutral-800">
                      <tr>
                        <th scope="col" class=" px-2 py-2 text-white">
                          IMAGE
                        </th>
                        <th scope="col" class=" px-6 py-2 text-white">
                          BUSINESS NAME
                        </th>
                        <th scope="col" class=" px-6 py-2 text-white">
                          TERM
                        </th>
                        <th scope="col" class=" px-6 py-2 text-white">
                          AMOUNT
                        </th>
                        <th scope="col" class=" px-6 py-2 text-white">
                          TYPE
                        </th>
                        <th scope="col" class=" px-6 py-2 text-white">
                          STATUS
                        </th>
                        <th scope="col" class=" px-6 py-2 text-white">
                          LOCATIONS
                        </th>
                        <th scope="col" class=" px-6 py-2 text-white">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((business, index) => {
                        return (
                          <>
                            <tr class="border-2 border-[#000000]">
                              <td class="whitespace-nowrap flex justify-center  px-2 py-2">
                                <Image
                                  src={
                                    business?.profilePhoto ??
                                    "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg"
                                  }
                                  className={"w-7 h-7 rounded-3xl"}
                                  alt={"test_image"}
                                />
                              </td>
                              <td class="whitespace-nowrap font-semibold px-6 py-2 underline">
                                {business.name}
                              </td>
                              <td class="whitespace-nowrap font-semibold px-6 py-2">
                                Yearly
                              </td>
                              <td class="whitespace-nowrap font-semibold px-6 py-2">
                                $360.00
                              </td>
                              <td class="whitespace-nowrap font-semibold px-6 py-2">
                                {business.profileType}
                              </td>
                              <td class="whitespace-nowrap font-semibold px-6 py-2">
                                {businessStatus[business.status]}
                              </td>
                              <td class="whitespace-nowrap font-semibold px-6 py-2">
                                {business.locations?.length}
                              </td>
                              <td class="whitespace-nowrap  px-6 py-2">
                                <PrimaryButton
                                  loading={loading && businessId === business._id}
                                  onClick={() =>
                                    selectBusinessHandler(business._id)
                                  }
                                >
                                  Select Business
                                </PrimaryButton>
                                {/* <EditIcon
                              onClick={() =>
                                navigate(
                                  `/dashboard/edit-business-details/${business._id}`
                                )
                              }
                              className="cursor-pointer text-white rounded-2xl bg-black "
                            /> */}
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-10 text-center text-[#666] font-semibold text-lg">
              <p>No business user created yet!</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BusinessDetailTable;

// <tr class="border-2 border-[#000000]">
//                     <td class="whitespace-nowrap flex justify-center  px-2 py-2">
//                       <Image
//                         src={
//                           "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg"
//                         }
//                         className={"w-7 h-7 rounded-3xl"}
//                         alt={"test_image"}
//                       />
//                     </td>
//                     <td class="whitespace-nowrap font-semibold px-6 py-2 underline">
//                       Robin Seth
//                     </td>
//                     <td class="whitespace-nowrap font-semibold px-6 py-2">
//                       Yearly
//                     </td>
//                     <td class="whitespace-nowrap font-semibold px-6 py-2">
//                       $360.00
//                     </td>
//                     <td class="whitespace-nowrap font-semibold px-6 py-2">
//                       Business
//                     </td>
//                     <td class="whitespace-nowrap font-semibold px-6 py-2">
//                       Active
//                     </td>
//                     <td class="whitespace-nowrap font-semibold px-6 py-2">3</td>
//                     <td class="whitespace-nowrap  px-6 py-2">
//                       <EditIcon
//                         onClick={() =>
//                           navigate("/dashboard/edit-business-details/00")
//                         }
//                         className="cursor-pointer text-white rounded-2xl bg-black "
//                       />
//                     </td>
//                   </tr>
