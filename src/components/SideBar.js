import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
 const user = JSON.parse(localStorage.getItem('userId'))
   
  return (
    <div className="bg-indigo-800 w-64 h-[600px] m-4 rounded-3xl">
      <div className="pt-56 pl-5 pr-3">
        <div className="text-2xl text-white  border-b border-gray-200 p-2">
          <Link to={`/user-profile/${user.id}`}>Profile</Link>
        </div>
        <div className="text-2xl text-white border-b border-gray-200 p-2">
          <Link to="/posts">Posts</Link>
        </div>

        <div className="text-2xl text-white border-b border-gray-200 p-2">
          <Link to="/gallery">Gallery</Link>
        </div>

        <div className="text-2xl text-white border-b border-gray-200 p-2">
          <Link to="/todo">ToDo</Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar