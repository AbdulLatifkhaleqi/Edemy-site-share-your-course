import React from 'react';
import { dummyTestimonial } from '../assets/assets';
import Testmo from '../components/Testmo';

function Testimonials() {
  return (
    <div className="All flex w-full flex-col items-center justify-center gap-[2rem]  py-[3rem]">
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <h1 className="text-xl font-semibold text-black">Testimonials</h1>
        <div className="flex flex-col items-center justify-center text-gray-800">
          <p>
            Hear from our learners as they share their journeys of transforming,
            success , and how our
          </p>
          <p>platform has made a difference in their lives.</p>
        </div>
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-[2rem] max-md:justify-center max-sm:justify-center">
        {dummyTestimonial.map((dummytest, i) => (
          <Testmo
            key={i}
            name={dummytest.name}
            image={dummytest.image}
            rating={dummytest.rating}
            feedback={dummytest.feedback}
            role={dummytest.role}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
