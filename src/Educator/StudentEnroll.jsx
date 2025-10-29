import React from 'react';
import { StudentEnrolls } from '../assets/assets';

function StudentEnroll() {
  return (
    <div>
      <div className="flex w-full ">
        <table className="w-full">
          <thead className="w-full px-3 py-2 text-black">
            <tr className="border-gray-600/200 w-full   border-[1px] px-3 py-2 ">
              <td className="px-3 py-2">#</td>
              <td className="px-3 py-2">Student Name</td>
              <td className="max-lg:hidden">Course Title</td>
              <td>Date</td>
            </tr>
          </thead>
          <tbody className="w-full">
            {StudentEnrolls.map((data, i) => (
              <tr className="border-gray-500/200 w-full  border-[1px] px-3 py-2 ">
                <td className="px-3 py-2">{data.id}</td>
                <td className=" flex items-center gap-2 px-3 py-2 max-lg:px-2  ">
                  <img
                    className="h-[40px] w-[40px]"
                    src={`/profiles/profile_img_${i + 1}.png`}
                    alt="course img"
                  />
                  <p> {data.studentName}</p>
                </td>
                <td className="max-lg:hidden">{data.courseTitle}</td>
                <td>{data.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentEnroll;
