import React from 'react';
import { FaTimes } from 'react-icons/fa';

function AddLecture({ setAllLecture }) {
  return (
    <div className="absolute ml-[-5rem] mt-[-9rem] flex h-screen w-full items-center justify-center backdrop-blur-sm max-sm:ml-[-1.2rem]">
      <div className="relative flex flex-col gap-3 rounded-sm bg-white px-4 py-2 ">
        <div
          onClick={() => setAllLecture(false)}
          className="absolute right-2 cursor-pointer"
        >
          <FaTimes size={22} />
        </div>
        <form className="flex w-[20rem] flex-col gap-2 max-sm:w-[17rem]">
          <h1 className="text-xl font-medium text-black">Add Lecture</h1>
          <label>Lecture Title</label>
          <input className="inputLecture" type="text" name="title" />
          <label>Duration(minute)</label>
          <input className="inputLecture" type="number" name="duration" />
          <label>Lecture URL</label>
          <input className="inputLecture" type="text" name="url" />
          <button className="mt-2 w-full cursor-pointer rounded-md bg-blue-700 px-2 py-2 text-white hover:bg-blue-800">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddLecture;
