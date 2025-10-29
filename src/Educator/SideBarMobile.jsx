import React from 'react';
import { FaTimes } from 'react-icons/fa';

import {
  IoAddCircleOutline,
  IoBookmarkOutline,
  IoHomeOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

function SideBarMobile({ setShowSide }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex h-screen w-[12.5rem] flex-col items-start gap-2 border-r-[1px] border-gray-800 bg-blue-500 px-[1.2rem] py-[1rem] max-md:px-[0.4rem]  md:hidden ">
      <FaTimes
        className="absolute right-3"
        onClick={() => setShowSide(false)}
        size={26}
      />
      <Link
        to="/dashboard"
        style={{ backgroundColor: path === '/dashboard' ? '#d9e7eb' : '' }}
        className="SidebarLink mt-9"
      >
        <IoHomeOutline size={20} />
        <h1 onClick={() => setShowSide(false)}>Dashboard</h1>
      </Link>
      <Link
        to="/addCourse"
        style={{ backgroundColor: path === '/addCourse' ? '#d9e7eb' : '' }}
        className="SidebarLink"
      >
        <IoAddCircleOutline size={20} />
        <h1 onClick={() => setShowSide(false)}>Add Course</h1>
      </Link>
      <Link
        style={{ backgroundColor: path === '/myCourse' ? '#d9e7eb' : '' }}
        to="/myCourse"
        className="SidebarLink"
      >
        <IoBookmarkOutline size={20} />
        <h1 onClick={() => setShowSide(false)}>My Course</h1>
      </Link>
      <Link
        style={{ backgroundColor: path === '/myStudent' ? '#d9e7eb' : '' }}
        to="/myStudent"
        className="SidebarLink"
      >
        <IoPersonOutline size={20} />
        <h1 onClick={() => setShowSide(false)}>Student Enroll</h1>
      </Link>
    </div>
  );
}

export default SideBarMobile;
