import React, { useState } from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import SideBarMobile from './SideBarMobile';

function Educator() {
  const [showSide, setShowSide] = useState(false);

  return (
    <div className="flex w-full">
      <SideBar />
      <div className="flex w-full flex-col gap-3 px-[3rem]  py-[2rem] max-lg:px-[1.2rem] max-md:px-[1.2rem] max-md:py-4  max-sm:px-2">
        <div onClick={() => setShowSide(true)}>
          {!showSide && (
            <BiMenu
              className="ml-3 hidden cursor-pointer max-md:flex"
              size={28}
            />
          )}
        </div>
        <div className="absolute left-0 top-[4.5rem] max-md:top-[4.3rem]">
          {showSide && (
            <SideBarMobile showSide={showSide} setShowSide={setShowSide} />
          )}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Educator;
