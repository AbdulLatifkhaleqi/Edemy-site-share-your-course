import { BiMenu } from 'react-icons/bi';
import { assets } from '../assets/assets';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Auth from './Auth';

function Header() {
  const [showMenu, setShowMenu] = useState(true);

  const [auth, setAuth] = useState(false);

  const navigate = useNavigate();

  const menuBar = (
    <>
      <p
        className="cursor-pointer"
        onClick={function () {
          navigate('/dashboard');
          setShowMenu(true);
        }}
      >
        Become Educator
      </p>
      {showMenu && <p className="h-[30px] w-[2px] bg-gray-500"></p>}
      <p
        onClick={function () {
          navigate('/myenroll');
          setShowMenu(true);
        }}
        className="cursor-pointer"
      >
        My Enrollments
      </p>
      <button
        onClick={function () {
          setAuth(true);
          setShowMenu(true);
        }}
        className="rounded-full bg-blue-700 px-3 py-[3px] font-medium text-white shadow-md hover:bg-blue-800"
      >
        Create Account
      </button>
    </>
  );

  return (
    <>
      <div className=" All flex w-full items-center justify-between border-b-[1px] border-gray-500 bg-gray-200 ">
        <div className="flex cursor-pointer items-center">
          <img
            onClick={() => navigate('/')}
            src={assets.logo}
            alt="logo icon"
          />
        </div>
        <div className="flex items-center gap-4 text-xl font-medium max-md:gap-2 max-md:text-xl max-sm:hidden">
          {menuBar}
        </div>
        <p className="hidden cursor-pointer max-sm:flex">
          {showMenu ? (
            <BiMenu onClick={() => setShowMenu(false)} size={40} />
          ) : (
            <FaTimes onClick={() => setShowMenu(true)} size={40} />
          )}
        </p>
      </div>
      {!showMenu && (
        <div className="absolute right-0 top-[4rem] flex  flex-col gap-4 rounded-sm bg-gray-200 px-3 py-5 text-lg text-black sm:hidden">
          {menuBar}
        </div>
      )}
      <div>{auth && <Auth setAuth={setAuth} />}</div>
    </>
  );
}

export default Header;
