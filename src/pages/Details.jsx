import React from 'react';
import { assets, dummyCourses } from '../assets/assets';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';

function Details() {
  const { id } = useParams();

  ////////////////////////////////////////
  /// ///////count some value

  const detailCourse = dummyCourses.find((data) => data._id === id);

  const price = Math.floor(detailCourse.coursePrice - detailCourse.discount);

  const discount = Math.floor(
    (detailCourse.discount / detailCourse.coursePrice) * 100
  );

  const chapters = detailCourse.discount * detailCourse.courseContent.length;

  const duration = detailCourse.courseContent.reduce((acur, value) =>
    value.chapterContent.reduce((acu, data) => acu + data.lectureDuration, 0)
  );

  ////////////////////////////////////////
  /// /////// return part

  return (
    <div className="All grid w-full grid-cols-[2fr_1fr] flex-col gap-[3rem] px-[6rem] py-[3rem] max-lg:px-[2rem] max-md:flex max-md:items-center max-md:px-[2rem] max-sm:px-5">
      {/* ///////////////////////////////////////////////
      /////////////////// details part and content. */}

      <div className="flex w-full flex-col items-start gap-3">
        <h1 className=" text-2xl font-semibold text-black">
          {detailCourse.courseTitle}
        </h1>
        <div
          className="w-[80%]"
          dangerouslySetInnerHTML={{ __html: detailCourse.courseDescription }}
        ></div>
        <div className="flex w-full flex-wrap items-center gap-2">
          <p>4.5</p>
          {Array.from({ length: 4 }, (_, i) => i + 1).map((i) => (
            <img
              className="cursor-pointer"
              src={assets.star}
              alt=" star"
              key={i}
            />
          ))}
          <img
            className="w-[22px] cursor-pointer"
            src={assets.star_blank}
            alt="star"
          />
          ( <p className="text-blue-700"> 125 ratings</p>)<p>43 students</p>
        </div>
        <div className="my-4 flex w-full flex-col items-start gap-3">
          <h1 className="text-[18px] font-semibold text-black">
            Course Structure
          </h1>
          <div className="flex flex-wrap gap-2">
            18 sections-26 lectures-{' '}
            <p> {duration >= 60 ? Math.floor(duration / 60) : ''}</p>
            <span>{duration >= 60 ? 'Hours ,' : ''}</span>
            <p>{Math.floor(duration % 60)}</p>
            <span>Minutes</span>
            <p>Total duration</p>
          </div>

          {/* ///////////////////////////////////////////////
      /////////////////// show chpater details */}

          <div className="flex w-full flex-col items-start gap-2">
            {detailCourse.courseContent.map((data, i) => (
              <Detail data={data} key={i} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-black">
            Course Description
          </h1>
          <div
            className="w-[80%] text-xl text-gray-800 "
            dangerouslySetInnerHTML={{ __html: detailCourse.courseDescription }}
          ></div>
          <ul className="flex flex-col items-start gap-1 pt-3 text-xl text-gray-800">
            {detailCourse.courseContent.map((data) =>
              data.chapterContent.map((value) => (
                <li className="pl-2">. {value.lectureTitle}</li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* ////////////////////////////////////////
////////////// part 2 */}

      <div className="flex h-fit flex-col gap-2 rounded-b-md shadow-md max-md:w-[80%] max-sm:w-full">
        <img
          src={detailCourse.courseThumbnail}
          alt={detailCourse.courseTitle}
        />
        <div className="flex flex-col gap-[0.6rem] px-4 py-3">
          <div className=" flex gap-1 text-red-900">
            <img src={assets.time_left_clock_icon} alt="" />
            <p> 5 days left at this price</p>
          </div>

          <div className="flex  flex-wrap items-center gap-3">
            <p className="text-2xl font-semibold text-black">
              <span className="font-semibold text-black">$</span>
              {price}
            </p>
            <p className="line-through">
              <span>$</span>
              {detailCourse.coursePrice}
            </p>
            <p>{discount} % off</p>
          </div>
          <div className="flex flex-wrap items-center gap-2  text-sm">
            <div className="flex gap-1">
              <img src={assets.star} alt="star" />
              <p>5</p>
            </div>
            |
            <div className="flex items-center gap-1">
              <img src={assets.time_clock_icon} alt="clock" />
              <p> {duration >= 60 ? Math.floor(duration / 60) : ''}</p>
              <span>{duration >= 60 ? 'Hours ,' : ''}</span>
              <p>{Math.floor(duration % 60)}</p>
              <span>Minutes</span>
            </div>
            |
            <div className="flex items-center gap-1">
              <img src={assets.lesson_icon} alt="lessons" />
              <p>{chapters}</p>
              <span>Lessons</span>
            </div>
          </div>
          <button className="my-2 rounded-[3px] bg-blue-800 px-2 py-[6px] text-white hover:bg-blue-900">
            Enroll Now
          </button>
          <div>
            <h1 className="text-xl font-semibold text-black">
              What's in the course?
            </h1>
            <ul className="flex flex-col items-start gap-1">
              {detailCourse.courseContent.map((data) =>
                data.chapterContent.map((value) => (
                  <li className="pl-2">. {value.lectureTitle}</li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
