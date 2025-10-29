import { useNavigate } from 'react-router-dom';
import { dummyCourses } from '../assets/assets';
import Course from '../components/Course';

function Courses() {
  const navigate = useNavigate();

  return (
    <div className="All flex w-full flex-col items-center justify-center gap-[2.4rem]">
      <div className="flex flex-col gap-2">
        <h1 className="flex items-center justify-center text-2xl font-semibold text-black">
          Learn from the best
        </h1>
        <div className="flex flex-col items-center justify-center text-gray-900">
          <p>
            Discover our top-rated courses across various categories. From
            coding and design to{' '}
          </p>
          <p>
            business and wellness, our courses are crafted to deliver results.
          </p>
        </div>
      </div>
      <div className="flex w-full  flex-wrap items-center justify-start gap-[1.4rem] max-md:justify-center max-sm:flex-col max-sm:items-center max-sm:justify-center">
        {dummyCourses.slice(0, 4).map((course, i) => (
          <Course
            title={course.courseTitle}
            discount={course.discount}
            key={i}
            price={course.coursePrice}
            imgUrl={course.courseThumbnail}
            id={course._id}
          />
        ))}
      </div>
      <div>
        <button
          onClick={() => navigate('/allcourse')}
          className="rounded-md border-[1px] border-gray-800 px-7 py-2 shadow-md hover:bg-slate-200"
        >
          Show all courses
        </button>
      </div>
    </div>
  );
}

export default Courses;
