import React from "react";
import { socialMediaPost } from "../../contentmanagement/sidepanal";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Image from "../image";
import Text from "../../common/Text";
import { Link } from "react-router-dom";

const CardView = ({ data, setEventId, deleteEvent }) => {
  return (
    <div className="mx-12">
      {data ? (
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {data?.map((items) => {
            return (
              <div className="relative flex flex-col items-center justify-center overflow-hidden border border-black rounded-xl">
                <div className="absolute flex justify-between w-full px-3 top-2">
                  <div className="bg-[#45818E] text-white capitalize  px-2 rounded-md ">
                    {items.status}
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/dashboard/content/${items._id}`}>
                      <RemoveRedEyeIcon
                        // onClick={() => setEventId(items._id)}
                        className="p-1 rounded-full cursor-pointer !text-white bg-black"
                      />
                    </Link>
                    <EditOutlined
                      onClick={() => setEventId(items._id)}
                      className="p-1 rounded-full cursor-pointer !text-white bg-black"
                    />
                    <DeleteOutline
                      onClick={() => deleteEvent(items._id)}
                      className="cursor-pointer p-1 rounded-full !text-white bg-black"
                    />
                  </div>
                </div>
                <div className="flex h-full items-center justify-center w-full bg-cover">
                  {/* <Image
                  src={items.images[0]?.url ?? "https://via.placeholder.com/150"}
                  className={"max-w-full absolute -z-10 blur-md object-cover"}
                  alt={"evnt_img"}
                /> */}
                  <Image
                    src={
                      items.images[0]?.url ?? "https://via.placeholder.com/150"
                    }
                    className={"h-40  md:h-32 lg:h-36 xl:h-40  w-full"}
                    alt={"evnt_img"}
                  />
                  {/* max-w-full w-[50%] object-contain */}
                </div>
                <div className="w-full p-2 bg-black">
                  <Text className="font-bold text-white">
                    {items.description}
                  </Text>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <div className="mt-10 text-center text-[#666] font-semibold text-lg">
            <p>No Events created yet!</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CardView;
