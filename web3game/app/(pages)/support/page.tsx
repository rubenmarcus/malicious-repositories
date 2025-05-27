import React from "react";
import SupportFlyer from "@/components/common/SupportFlyer";
import CoinFlip from "@/app/(pages)/(landing)/_partials/CoinFlip";

const Support = () => {
  return (
    <div className="pt-16 ">
      <SupportFlyer variant="support" />
      <CoinFlip />
    </div>
  );
};

export default Support;
