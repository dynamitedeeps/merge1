import React from "react";
import EditBusiness from "../../component/businessDetailsScreen/EditBusiness";
import Text from "../../common/Text";

const BusinessDetailEdit = () => {
  return (
    <div className="">
      <div className="mx-12 my-4">
        <Text className="text-[24px] mob:text-[16px] font-bold">
          Edit Business
        </Text>
      </div>
      <EditBusiness />
    </div>
  );
};

export default BusinessDetailEdit;
