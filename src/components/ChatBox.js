import React, { useState } from "react";
import { BsChatRight, BsChevronDown, BsChevronUp } from "react-icons/bs";
import MailBox from "./MailBox";

const ChatBox = ({ user }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mail, setMail] = useState(false);

  const toggleList = () => {
    setIsExpanded(!isExpanded);
  };

  const userDetails = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div
        className="flex items-center justify-between w-72 p-2 font-bold bg-indigo-700 cursor-pointer text-white relative"
        onClick={toggleList}
      >
        <div className="flex items-center gap-4 justify-center">
          <BsChatRight />
          <h3 className="text-xl">Chats</h3>
        </div>
        <div className="text-xl">
          {isExpanded ? <BsChevronDown /> : <BsChevronUp />}
        </div>
      </div>
      {isExpanded && (
        <div className="flex flex-col w-72 p-2 border-x border-indigo-500 overflow-y-auto max-h-[400px]">
          {userDetails.map((user) => (
            <div className="flex items-center space-x-2 p-2 rounded bg-white cursor-pointer">
              <img
                src={user.profilepicture}
                alt={user.name}
                className="w-8 h-8 rounded-full"
                key={user.id}
              />
              <span onClick={() => setMail(!mail)}>{user.name}</span>
            </div>
          ))}
          {/* ********************************* Mail box Component  ****************************************** */}
          {mail && (
            <div
              className="absolute -bottom-14 right-80"
              onClick={() => setMail(!mail)}
            >
              <MailBox user={user} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBox;
