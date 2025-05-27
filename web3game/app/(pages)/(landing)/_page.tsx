import CoinFlip from "./_partials/CoinFlip";
import React from "react";
import Welcome from "./_partials/Welcome";

const Home = () => {
  return (
    <div className=" py-[26px] md:py-16 lg:pr-[0px]">
      <Welcome />
      <CoinFlip />
    </div>
  );
};

export default Home;
