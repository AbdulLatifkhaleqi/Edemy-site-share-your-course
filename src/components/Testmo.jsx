import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

function Testmo({ name, image, role, rating, feedback }) {
  return (
    <div className="flex w-[23rem] flex-col gap-3 rounded-lg shadow-md  max-sm:w-full">
      <div className="flex w-full items-center justify-start gap-[1rem] rounded-t-lg bg-gray-200 px-4 py-2">
        <img width={70} height={70} src={image} alt={name} />
        <div>
          <h1 className="text-xl font-bold">{name}</h1>
          <p>{role}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-4 py-2">
        <div className="flex items-center gap-2">
          {Array.from({ length: rating }, (_, i) => i + 1).map((_, i) => (
            <img src={assets.star} alt="star" key={i} />
          ))}
        </div>
        <p>{feedback}</p>

        <Link>Read more</Link>
      </div>
    </div>
  );
}

export default Testmo;
