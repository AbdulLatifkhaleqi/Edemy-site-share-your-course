import React, { useRef, useState } from 'react';
import { assets } from '../assets/assets';
import AddLecture from './AddLecture';

function AddCourse() {
  const refHi = useRef(null);

  const [addLecture, setAddLecture] = useState(false);

  const addImg = (e) => {
    e.preventDefault();
    refHi.current.click();
  };
  const inputClass =
    'w-[24rem] max-sm:w-full rounded-md border-[1px] border-gray-600 px-3 py-1 outline-none';

  return (
    <div className="flex w-fit flex-col gap-3 max-sm:w-full max-sm:px-3">
      <div className="flex flex-col gap-1">
        <label>Course Title</label>
        <input type="text" placeholder="Type here" className={inputClass} />
      </div>
      <div className="flex flex-col gap-1">
        <label>Course Description</label>
        <textarea
          className={`${inputClass} resize-none`}
          placeholder="Type......"
          rows={3}
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <label>Course Price</label>
          <input
            type="number"
            placeholder="0"
            className="w-[7rem] rounded-md border-[1px] border-gray-600 px-3 py-1 outline-none"
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <label>Course thumbnail</label>
          <input type="file" accept="image/*" hidden ref={refHi} name="photo" />
          <p className="cursor-pointer rounded-sm bg-blue-800 p-1">
            {' '}
            <img
              onClick={addImg}
              className="h-[20px] w-[20px] cursor-pointer "
              src={assets.file_upload_icon}
              alt="upload-icon"
            />
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label>Discount</label>
        <input
          type="number"
          placeholder="0"
          className="w-[7rem] rounded-md border-[1px] border-gray-600 px-3 py-1 outline-none"
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2">
          <img
            className="h-[30px] w-[30px] cursor-pointer"
            src={assets.dropdown_icon}
            alt="dropdown-icon"
          />
          1 introduction
        </p>
        <p>0 Lectures</p>
      </div>
      <button className="flex w-fit items-center justify-center gap-1 rounded-sm bg-gray-200 px-2 py-1 hover:bg-gray-300">
        <img
          className="h-[20px] w-[20px]"
          src={assets.add_icon}
          alt="add-icon"
        />
        <p onClick={() => setAddLecture(true)}> Add Lectures</p>
      </button>
      {addLecture && <AddLecture setAllLecture={setAddLecture} />}

      <button className="flex  items-center justify-center gap-1 rounded-sm bg-blue-300 px-2 py-1 hover:bg-blue-400">
        <img
          className="h-[20px] w-[20px]"
          src={assets.add_icon}
          alt="add-icon"
        />
        Add Chapter
      </button>
    </div>
  );
}

export default AddCourse;
