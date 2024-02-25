import React from "react";
import Image from "../image";
import swal from "@sweetalert/with-react";
// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteData } from "../../utils/api";
import { enqueueSnackbar } from "notistack";
import { formatErrorMessage } from "../../utils/formatErrorMessage";
import ContentLoader from "../../common/Loader/contentLoader";

const BusinessTable = ({ data, fetchAllBusinessDetails, loading }) => {
  const handleDeleteUser = async (id) => {
    swal({
      // title: "Are you sure?",
      title: "Are you sure that you want to delete this user?",
      icon: "warning",
      buttons: [true, "Delete"],

      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await deleteData(`business-profile/staff/delete/${id}`);
        if (res.data) {
          enqueueSnackbar(res.data.message ?? "", {
            variant: "success",
          });
          fetchAllBusinessDetails();
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
      }
    });
  };

  if (loading) {
    return <ContentLoader />;
  }

  return (
    <>
      <div class="flex flex-col mx-12">
        {data?.length > 0 ? (
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
                        NAME
                      </th>
                      <th scope="col" class=" px-6 py-2 text-white">
                        TYPE
                      </th>
                      <th scope="col" class=" px-6 py-2 text-white">
                        Email
                      </th>
                      {/* <th scope="col" class=" px-6 py-2 text-white">
                      EDIT
                    </th> */}
                      <th scope="col" class=" px-6 py-2 text-white">
                        DELETE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((user, index) => {
                      return (
                        <tr class="border-2 border-[#000000]" key={index}>
                          <td class="whitespace-nowrap flex justify-center  px-2 py-2">
                            <Image
                              src={
                                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg"
                              }
                              className={"w-7 h-7 rounded-3xl"}
                              alt={"test_image"}
                            />
                          </td>
                          <td class="whitespace-nowrap font-semibold px-6 py-2 underline">
                            {user?.firstName + " " + user?.lastName}
                          </td>
                          <td class="whitespace-nowrap font-semibold px-6 py-2">
                            {user?.profileType}
                          </td>
                          <td class="whitespace-nowrap font-semibold px-6 py-2">
                            {user?.email}
                          </td>
                          {/* <td class="whitespace-nowrap  px-6 py-2">
                          <EditIcon
                            onClick={handleOpen}
                            className="cursor-pointer text-white rounded-2xl bg-black "
                          />
                        </td> */}
                          <td
                            class="whitespace-nowrap  px-6 py-2"
                            onClick={() => handleDeleteUser(user?._id)}
                          >
                            <DeleteIcon className="text-white rounded-2xl bg-black cursor-pointer" />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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

export default BusinessTable;
