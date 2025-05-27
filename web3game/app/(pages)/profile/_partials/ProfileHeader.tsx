import React from "react";
import ProfileContainer from "./ProfileContainer";
import LevelCounter from "./LevelCounter";

const ProfileHeader = () => {
  return (
    <div className=" relative flex flex-col lg:flex-row gap-[26px]">
      <ProfileContainer />
      <LevelCounter />
    </div>
  );
};

export default ProfileHeader;
