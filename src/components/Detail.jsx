import React, { useState } from 'react';
import { assets } from '../assets/assets';

function Detail({ data }) {
  const [chapDetail, setChapDetail] = useState(false);
  return (
    <div className="flex w-full flex-col items-center gap-2 border-[1px] border-gray-400">
      <div className="flex w-full items-center justify-between gap-2 rounded-sm border-[1px] border-gray-300 bg-gray-200 px-3 py-2">
        <p className="flex items-center gap-2">
          <button onClick={() => setChapDetail((el) => !el)}>
            <img src={assets.down_arrow_icon} alt="down arrow" />
          </button>
          <h1>{data.chapterTitle}</h1>
        </p>
        <p>{data.chapterContent.length} lectures</p>
      </div>
      {chapDetail && (
        <div className="flex w-full flex-col gap-2 px-3 py-1">
          {data.chapterContent.map((val) => (
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-3 pb-1">
                <img
                  className="cursor-pointer"
                  src={assets.play_icon}
                  alt="play icon"
                />
                <p>{val.lectureTitle}</p>
              </div>
              <p>{val.lectureDuration} mins</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Detail;
