import React from "react";
import Sidebar from "../components/sidebar/sidebar";
import UserProfile from "../components/profile/userProfile";
import userProfileStore from "../store/userProfileStore";
import EditProfile from "../components/profile/editProfile";
import Connections from "../components/profile/connections";

export default function ProfilePage() {
  const { profilePage } = userProfileStore();

  return (
    <>
      <Sidebar />
      {profilePage === "about" && <UserProfile />}
      {profilePage === "edit" && <EditProfile />}
      {profilePage === "peeps" && <Connections />}
    </>
  );
}
