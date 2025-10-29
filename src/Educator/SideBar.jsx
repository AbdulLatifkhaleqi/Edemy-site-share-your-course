import React from 'react';

import {
  IoAddCircleOutline,
  IoBookmarkOutline,
  IoHomeOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

function SideBar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex h-screen w-[17rem] flex-col items-start gap-2 border-r-[1px] border-gray-800 px-[1.2rem] py-[1rem] max-md:hidden max-md:px-[0.4rem] ">
      <Link
        to="/dashboard"
        style={{ backgroundColor: path === '/dashboard' ? '#d9e7eb' : '' }}
        className="SidebarLink"
      >
        <IoHomeOutline size={20} />
        <h1>Dashboard</h1>
      </Link>
      <Link
        to="/addCourse"
        style={{ backgroundColor: path === '/addCourse' ? '#d9e7eb' : '' }}
        className="SidebarLink"
      >
        <IoAddCircleOutline size={20} />
        <h1>Add Course</h1>
      </Link>
      <Link
        style={{ backgroundColor: path === '/myCourse' ? '#d9e7eb' : '' }}
        to="/myCourse"
        className="SidebarLink"
      >
        <IoBookmarkOutline size={20} />
        <h1>My Course</h1>
      </Link>
      <Link
        style={{ backgroundColor: path === '/myStudent' ? '#d9e7eb' : '' }}
        to="/myStudent"
        className="SidebarLink"
      >
        <IoPersonOutline size={20} />
        <h1>Student Enroll</h1>
      </Link>
    </div>
  );
}

export default SideBar;
