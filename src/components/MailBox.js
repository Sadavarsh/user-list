import React from "react";
import { BsChevronDown, BsX } from "react-icons/bs";
import { FcNext } from "react-icons/fc";
import { RxDividerVertical } from "react-icons/rx";
const MailBox = ({ user }) => {
  return (
    <>
      <div className="m-10 relative w-72 min-h-[400px] border-x border-gray-200">
        {/* ********************************* Mail box Header  ****************************************** */}
        <div className="flex items-center justify-between w-72 p-2 font-bold bg-indigo-700 cursor-pointer text-white">
          <div className="flex items-center gap-4 justify-center">
            <img
              src={user.profilepicture}
              alt={user.name}
              className="w-8 h-8 rounded-full"
            />
            <span>{user.name}</span>
          </div>
          <div className="text-xl flex items-center justify-center">
            <BsChevronDown /> <BsX />
          </div>
        </div>
        {/* ********************************* chat  Details   ****************************************** */}
        <div className="bg-white shadow relative">
          <div className="w-52 absolute left-1 top-2">
            <p className="bg-gray-100 mb-1 p-2 rounded">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="bg-gray-100 mb-1 p-2 rounded">
              Lorem ipsum dolor sit amet consectetur,
            </p>
          </div>
          <div className="absolute left-10 top-36">
            <p>
              seen: <span>{"2:30 am"}</span>
            </p>
          </div>
          <div className="w-52 absolute right-1 top-44">
            <p className="bg-gray-100 mb-1 rounded p-2">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="bg-gray-100 rounded p-2">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className=" w-72 border-t border-gray-200 absolute bottom-1 right-0">
          <div className="flex items-center justify-between">
            <RxDividerVertical /> <FcNext className="pr-2 text-3xl " />
          </div>
        </div>
      </div>
    </>
  );
};

export default MailBox;
