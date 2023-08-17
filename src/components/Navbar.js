import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavUsers from "./NavUsers";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("userId"));

  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  /* ********************************* Handle Sign Out  ****************************************** */

  const handleSignout = () => {
    navigate("/");
  };

  return (
    <div className="m-4">
      <nav className="bg-gray-200 relative p-2 flex justify-between items-center">
        <h2 className="text-xl font-semibold">{user.name} Profile</h2>
        <div
          className="flex items-center space-x-4 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <img
            src={user.profilepicture}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span>{user.name}</span>
        </div>
        {/* *********************************  Open And Close User Information  ****************************************** */}

        {toggle ? (
          <div className="absolute min-w-[250px] bg-white shadow top-14 right-0 rounded-2xl z-10">
            <div className="flex flex-col items-center justify-center gap-2 p-5">
              <img
                src={user.profilepicture}
                alt="User Avatar"
                className="w-20 h-20 rounded-full"
              />
              <span>{user.name}</span>
              <span>{user.email}</span>
            </div>
            {/* ********************************* NavUsers || Suggestion User  ****************************************** */}

            <div className="flex flex-col items-center">
              <NavUsers id={user.id} />
            </div>
            <div className="items-center p-4">
              <button
                className="bg-red-600 px-4 py-2 rounded-2xl text-white font-semibold"
                onClick={handleSignout}
              >
                Sign out
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

export default Navbar;
