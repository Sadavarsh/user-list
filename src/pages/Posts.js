import React from 'react'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import ChatBox from '../components/ChatBox';

const Posts = () => {
  const user = JSON.parse(localStorage.getItem("userId"));
  return (
    <div className="relative">
      <div className="flex">
        {/* ********************************* Side Bar Component ****************************************** */}
        <SideBar />

        {/* ********************************* Navbar Bar Component  ****************************************** */}
        <div className=" w-full m-4">
        
          <Navbar />
          {/* ********************************* Post  Page Details  ****************************************** */}
         
          <div className="mt-4 flex-none items-center justify-center">
            <div className="m-w-96 m-h-96 flex items-center justify-center mt-56">
              <h2 className="text-6xl text-gray-200 font-bold">Coming Soon</h2>
            </div>
          </div>
        </div>
      </div>

      {/* ********************************* chat box Component ****************************************** */}

      <div className="absolute -bottom-24 right-10 ">
        <ChatBox user={user} />
      </div>
    </div>
  );
}

export default Posts