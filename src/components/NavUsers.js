import React from "react";
import { Link } from "react-router-dom";

const NavUsers = ({ userId }) => {
  const userDetails = JSON.parse(localStorage.getItem("user"));

  const otherUser = userDetails.filter((user) => user.id !== parseInt(userId));

  return (
    <div className="">
      {otherUser.slice(0, 2).map((other) => {
        return (
          <Link key={other.id} to={`/user-profile/${other.id}`}>
            <div className="flex items-center space-x-4 space-y-4 border-t mt-2 cursor-pointer">
              <img
                src={other.profilepicture}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span>{other.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NavUsers;
