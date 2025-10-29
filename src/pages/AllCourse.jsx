import React, { useEffect, useState } from 'react';
import { dummyCourses } from '../assets/assets';
import Course from '../components/Course';

import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

function AllCourse() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState(dummyCourses);
  const [search, setSearch] = useState(false);
  const [input, setIput] = useState('');

  useEffect(() => {
    if (search) {
      if (input && input.length >= 3) {
        const findCourse = courses.filter((cor) =>
          cor.courseTitle.toLowerCase().includes(input)
        );
        if (findCourse) {
          setCourses(findCourse);
        } else {
          setSearch(false);

          setCourses(dummyCourses);
        }
      } else {
        setSearch(false);
        setCourses(dummyCourses);
      }
    }
  }, [input, search, courses]);

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="All  flex h-fit w-full flex-col gap-[3rem]">
        <div className="flex w-full  items-center justify-between gap-[3rem] max-sm:flex-col max-sm:items-start">
          <div className="flex flex-col items-start gap-2 text-black">
            <h1 className="text-xl font-semibold">Course List</h1>
            <p className=" flex gap-1 text-[16px]">
              {' '}
              <p className="hover:cursor-pointer" onClick={() => navigate('/')}>
                Home
              </p>{' '}
              / Course List
            </p>
          </div>
          <div className="flex items-center justify-between gap-3 rounded-md border-[1px] border-gray-500 bg-white pl-2 max-sm:w-full  max-sm:px-[3px]">
            <BiSearch size={23} />
            <input
              value={input}
              onChange={(e) => setIput(e.target.value)}
              type="text"
              placeholder="Search for Course"
              className="border-0 bg-white px-1 py-1 outline-none focus:outline-none max-sm:w-full"
            />
            <button
              onClick={() => setSearch(true)}
              className="rounded-sm bg-blue-900 px-3 py-2 text-white hover:bg-blue-950 max-sm:w-fit"
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center justify-start gap-[1.4rem] max-md:justify-center max-sm:items-center max-sm:justify-center">
          {courses.length > 0 ? (
            courses.map((course, i) => (
              <Course
                title={course.courseTitle}
                discount={course.discount}
                key={i}
                price={course.coursePrice}
                imgUrl={course.courseThumbnail}
                id={course._id}
              />
            ))
          ) : (
            <p className="h-[23rem] w-full items-center justify-center text-3xl text-black">
              Not found any courses!.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllCourse;
