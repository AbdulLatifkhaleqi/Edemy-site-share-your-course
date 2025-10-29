import { assets } from '../assets/assets';

function Learn() {
  return (
    <div className="All flex w-full flex-col items-center justify-center   gap-[1.2rem] py-[2rem]">
      <h1 className="text-xl font-semibold text-black">
        Learn anything , anytime , anywhere
      </h1>
      <div className="flex w-full flex-col items-center justify-center">
        <p>
          I've been using Imagify for nearly two years, primarily for Instagram,
          and it has been
        </p>
        <p>incredibly user-friendly, making my work much easier</p>
      </div>
      <div className="flex w-full items-center justify-center gap-[2rem] max-sm:gap-[1rem]">
        <button className="rounded-md border-0 bg-blue-900 px-5 py-1 text-[20px] text-white shadow-md outline-none   hover:bg-blue-950 max-sm:px-4 max-sm:text-[18px]">
          Get started
        </button>
        <div className="flex cursor-pointer place-items-baseline items-center justify-center gap-2 font-semibold text-black">
          <p>Learn more</p>
          <img className="pt-1" src={assets.arrow_icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Learn;
