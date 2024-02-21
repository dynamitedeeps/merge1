import React from "react";
import Text from "../../common/Text";
import { Add, FilterAlt } from "@mui/icons-material";

const BusinessHeader = ({handleOpen}) => {
  
  return (
    <>
      <div className="my-4 mx-12">
        <div className="flex justify-between items-center">
          <div>
            <Text className="text-[24px] mob:text-[16px] font-bold">
              Business Users
            </Text>
          </div>

          <div className="flex justify-between items-center gap-3">
            {/* <div className="">
              <div class="relative text-gray-600 focus-within:text-gray-400 border-2 rounded-md border-[#595959]">
                <input
                  type="search"
                  name="q"
                  class="py-1 text-sm text-[#595959] bg-white rounded-md pl-2 focus:outline-none focus:bg-white focus:text-gray-900"
                  placeholder="Search"
                />
                <span class="absolute inset-y-0 right-2 flex items-center pl-2">
                  <button
                    type="submit"
                    class="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      class="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            <div>
              <FilterAlt fontSize="large" className="text-[#595959]" />
            </div> */}
            <div>
              {/* @tobe make it common button */}
              <div
                onClick={handleOpen}
                className="bg-[#45818E] text-white cursor-pointer px-3 py-0.5 rounded-md flex justify-center items-center gap-1"
              >
                <Add className="!text-white" />
                <span>Add</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessHeader;
