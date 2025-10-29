import React from 'react';
import { dummyStudentEnrolled } from '../assets/assets';

function MyEnroll() {
  const dura = ['1 hour , 5 mins', '34 hour', '3 hour', '47 hour , 32 mins'];
  const lectures = ['2/4', '1/6', '5/5', '7/7'];
  return (
    <div className="All flex flex-col gap-4 pb-[3rem]">
      <h1 className="text-xl font-semibold text-black">My Enrollments</h1>

      <table>
        <thead className="px-3 py-2 text-black">
          <tr className="border-gray-600/200  border-[1px] px-3 py-2 ">
            <td className="px-3 py-2">Course</td>
            <td>Duration</td>
            <td className="max-sm:hidden">Completed</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {dummyStudentEnrolled.map((data, i) => (
            <tr className="border-gray-500/200  border-[1px] px-3 py-2 ">
              <td className="flex items-center gap-2 px-3 py-2">
                <img
                  className="h-8 w-8"
                  src={`/course/course_${i + 1}.png`}
                  alt="image"
                />
                <p className=" max-md:hidden">{data.courseTitle}</p>
              </td>
              <td>{dura[i]}</td>
              <td className="max-sm:hidden">{lectures[i]} Lectures</td>
              <td>
                <button className="rounded-md bg-blue-700 px-3 py-1 text-white">
                  {i === 3 ? 'Completed' : 'On Going'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyEnroll;
