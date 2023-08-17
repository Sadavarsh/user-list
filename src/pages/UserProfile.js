import React from "react";
import { useParams } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import ChatBox from "../components/ChatBox";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

function UserProfile() {
  const { id } = useParams();
  const userDetails = JSON.parse(localStorage.getItem("user"));
  const user = userDetails.find((item) => item.id === parseInt(id));
  localStorage.setItem("userId", JSON.stringify(user));

  return (
    <div className="relative">
      <div className="flex">
        {/* ********************************* Side Bar  ****************************************** */}
        <SideBar user={user} />

        {/* ********************************* Navbar  ****************************************** */}
        <div className=" w-full m-4">
          {/* Navbar */}
          <Navbar user={user} />
          {/* ********************************* User Details Page  ****************************************** */}

          <div className="mt-4">
            <UserDetails userId={user.id} />
          </div>
        </div>
      </div>

      {/* ********************************* chat box Details Page  ****************************************** */}

      <div className="absolute -bottom-24 right-10 ">
        <ChatBox user={user} />
      </div>
    </div>
  );
}

export default UserProfile;
