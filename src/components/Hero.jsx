import { BiSearch } from 'react-icons/bi';
import { assets } from '../assets/assets';
import Logos from '../components/Logos';

function Hero() {
  return (
    <div className="All flex h-full w-full flex-col items-center justify-center gap-[2rem] max-md:px-[2rem] max-sm:px-[0.6rem] max-sm:py-4">
      <div>
        <h1 className=" flex flex-col items-center  justify-center text-4xl  font-bold text-black  max-md:text-2xl max-sm:text-xl">
          <h1>Empower your future with the</h1>
          <h1>
            courses designed to
            <span className="text-blue-900"> fit your choice. </span>
          </h1>
          <img
            className="mr-[-15rem] max-md:hidden"
            src={assets.sketch}
            alt="sketch"
          />
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-[2rem] text-black">
        <div className=" flex flex-col items-center justify-center">
          <p>
            We bring together world-class instructors, interactive content , and
            a supportive community to help
          </p>
          <p>you achieve your personal goals.</p>
        </div>
        <div className="flex w-full items-center justify-between rounded-md border-[1px] border-gray-500 bg-white px-[2px] py-[2px] pl-3 ">
          <BiSearch size={22} />
          <input
            className="w-full rounded-md border-[0px] px-2 py-2 outline-none  ring-0 focus:border-[0px] focus:border-none focus:ring-0"
            type="text"
            placeholder="Search for courses"
          />
          <button className="rounded-md bg-blue-700 px-8 py-2 text-white hover:bg-blue-800 max-sm:px-5">
            Search
          </button>
        </div>
      </div>
      <div>
        <Logos />
      </div>
    </div>
  );
}

export default Hero;
