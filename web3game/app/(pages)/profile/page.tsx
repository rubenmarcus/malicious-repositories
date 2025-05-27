import React from "react";
import HistoryTable from "./_partials/HistoryTable";
import ProfileHeader from "./_partials/ProfileHeader";

const Profile = () => {
  return (
    <div className="pt-16  flex flex-col gap-16">
      <ProfileHeader/>
      <HistoryTable />
    </div>
  );
};

export default Profile;
