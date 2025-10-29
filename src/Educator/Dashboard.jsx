import React from 'react';
import { assets, dummyDashboardData } from '../assets/assets';

function Dashboard() {
  return (
    <div className="flex w-full flex-col gap-[2rem] max-md:px-3">
      <div className="flex  flex-wrap items-center gap-[2rem] ">
        <div className="flex items-center gap-4 rounded-md border-[1px] border-gray-400/100 bg-gray-100 px-3 py-2 text-[18px] font-medium text-black">
          <img
            className="h-[50px] w-[50px]"
            src={assets.patients_icon}
            alt="user"
          />
          <p className="flex flex-col">
            <span>5</span>
            Total Enrollments
          </p>
        </div>
        <div className="flex items-center gap-4 rounded-md border-[1px] border-gray-400/100 bg-gray-100 px-3 py-2 text-[18px] font-medium text-black">
          <img
            className="h-[50px] w-[50px]"
            src={assets.appointments_icon}
            alt="user"
          />
          <p className="flex flex-col">
            <span>8</span>
            Total Courses
          </p>
        </div>
        <div className="flex items-center gap-4 rounded-md border-[1px] border-gray-400/100 bg-gray-100 px-3 py-2 text-[18px] font-medium text-black">
          <img
            className="h-[50px] w-[50px]"
            src={assets.earning_icon}
            alt="user"
          />
          <p className="flex flex-col">
            <span>$704.40</span>
            Total Earnings
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <h1 className="text-xl font-semibold text-black">Latest Enrollments</h1>
        <table>
          <thead className="px-3 py-2 text-black">
            <tr className="border-gray-600/200  border-[1px] px-3 py-2 ">
              <td className="px-3 py-2">#</td>
              <td>Student Name</td>
              <td>Course Title</td>
            </tr>
          </thead>
          <tbody className="px-3 py-2">
            {dummyDashboardData.enrolledStudentsData.map((data, i) => (
              <tr className="border-gray-500/200  border-[1px] px-3 py-2 ">
                <td className="px-3 py-2">{i + 1}</td>
                <td className=" flex items-center gap-2  py-2">
                  <img
                    className="h-[50px] w-[50px] max-md:hidden max-sm:flex"
                    src={data.student.imageUrl}
                    alt="user"
                  />
                  <p className="max-sm:hidden"> {data.student.name}</p>
                </td>
                <td>{data.courseTitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
