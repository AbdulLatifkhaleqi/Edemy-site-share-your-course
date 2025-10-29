import React from 'react';
import { assets } from '../assets/assets';

import { BsGoogle } from 'react-icons/bs';
import { useState } from 'react';

function Auth({ setAuth }) {
  const [signup, setSignup] = useState(false);
  return (
    <div className="absolute mt-2  flex h-screen w-full items-start justify-center backdrop-blur-sm">
      <form
        className="relative flex flex-col items-center justify-center gap-4 rounded-lg bg-white px-[3rem] py-[2rem] shadow-md"
        action=""
      >
        <img
          onClick={() => setAuth(false)}
          className="absolute right-2 top-2 cursor-pointer px-1 py-1"
          src={assets.cross_icon}
          alt="cross-icon"
        />
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-xl font-semibold text-black">
            {' '}
            {signup ? 'Sign up' : ' Sign in'} <span> </span>to LMS
          </p>
          <p>
            Welcome back! Please{' '}
            <span> {signup ? 'Sign in  ' : ' Sign up  '} </span> to continue
          </p>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border-[1px] border-gray-600 px-2 py-1 shadow-sm">
          <BsGoogle size={18} />
          <p>Continue with Google</p>
        </div>
        <p>or</p>
        <div className="flex  w-full flex-col  items-start justify-start gap-1">
          <label className="font-semibold text-black" htmlFor="">
            E-mail address
          </label>
          <input
            className="w-full rounded-md border-[1px] border-gray-600 px-2 py-1 shadow-sm outline-none"
            type="text"
            placeholder="Enter your e-mail address"
            autoComplete="off"
          />
        </div>
        {signup && (
          <div className="flex  w-full flex-col  items-start justify-start gap-1">
            <label className="font-semibold text-black" htmlFor="">
              Password
            </label>
            <input
              className="w-full rounded-md border-[1px] border-gray-600 px-2 py-1 shadow-sm outline-none"
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
            />
          </div>
        )}
        <button className="mt-3 w-full items-center justify-center rounded-md bg-gray-900 px-2 py-1 text-white shadow-sm hover:bg-gray-950">
          Continue
        </button>
        <p className="w-full rounded-md px-2 py-1  ">
          {signup ? 'Have an account?' : " Don't have an accouut ?"}
          <span
            onClick={() => setSignup((e) => !e)}
            className="cursor-pointer text-gray-600 hover:text-gray-700"
          >
            {signup ? ' Sign in' : ' Sign up'}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Auth;
