import React from 'react';

import { dummyStudentEnrolled } from '../assets/assets';

function MyCourse() {
  const earins = [120, 76, 98.8, 34];
  const students = [67, 45, 80, 24];
  return (
    <div className="flex w-full flex-col gap-3">
      <h1 className="text-xl font-semibold text-black">My Course</h1>
      <div className="flex w-full ">
        <table className="w-full">
          <thead className="w-full px-3 py-2 text-black">
            <tr className="border-gray-600/200 w-full border-[1px]   px-3 py-2 max-sm:text-sm ">
              <td className="px-3 py-2">All Courses</td>
              <td>Earnings</td>
              <td>Students</td>
              <td>Published On</td>
            </tr>
          </thead>
          <tbody className="w-full">
            {dummyStudentEnrolled.map((data, i) => (
              <tr className="border-gray-500/200 w-full  border-[1px] px-3 py-2 ">
                <td className=" flex items-center gap-2 px-3 py-2 max-sm:text-sm  ">
                  <img
                    className="h-[50px] w-[50px]"
                    src={`/course/course_${i + 1}.png`}
                    alt="course img"
                  />
                  <p className="max-sm:hidden"> {data.courseTitle}</p>
                </td>
                <td>$ {earins[i]}</td>
                <td>{students[i]}</td>
                <td>{new Date(data.purchaseDate).getFullYear()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyCourse;
