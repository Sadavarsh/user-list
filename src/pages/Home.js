import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { fetchUsers } from "../store/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.userList);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  // ********************************* Fetch Api Data From Redux  ******************************************

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  //  Store User Data In Local Storage
  localStorage.setItem("user", JSON.stringify(userList));

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md shadow-md rounded-3xl">
        <h2 className="text-center font-bold text-2xl py-5 bg-gray-200">
          Select An Account
        </h2>
        <div className="flex flex-col items-center space-y-4 overflow-y-auto overflow-x-hidden h-[500px]">
          {userList.map((user) => (
            <Link key={user.id} to={`/user-profile/${user.id}`}>
              <div className="flex items-center min-w-[400px] space-x-2 p-2 border-b border-gray-300 rounded-2xl ">
                <img
                  src={user.profilepicture}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                <span>{user.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
