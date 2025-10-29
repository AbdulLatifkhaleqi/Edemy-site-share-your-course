import { assets } from '../assets/assets';

function Footer() {
  const company = ['Home', 'About us', 'Contact us', 'Privacypolicy'];

  return (
    <div className="All  w-full bg-black">
      <div className="flex w-full flex-wrap items-start justify-between gap-[3rem] py-6">
        <div>
          <img className="  pb-4" src={assets.logo_dark} alt="logo" />
          <p className="w-[20rem] text-white max-sm:w-fit ">
            Learn ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            eveniet voluptatibus debitis placeat aliquid sequi cum enim
            repudiandae, vero, necessitatibus quidem incidunt doloribus
            obcaecati eum iure sunt inventore deleniti. Aliquam!
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-[2rem] text-white">
          <h1 className="text-xl font-semibold">Company</h1>
          <div className="flex flex-col items-start justify-center gap-2">
            {company.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-5 text-white">
          <h1 className="text-xl font-semibold">Subscribe to our newsletter</h1>
          <p>
            The latest news. article, and resources , send to <br /> your inbox
            weekly.
          </p>
          <div className="flex w-fit items-center gap-3 max-sm:flex-wrap">
            <input
              className="w-fit rounded-sm bg-gray-600 px-2 py-1 shadow-md outline-none"
              placeholder="Enter your email"
              type="email"
            />
            <button className="w-fit rounded-md bg-blue-900 px-5 py-1 text-white hover:bg-blue-950 max-sm:px-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <div className="h-[1px] w-full rounded-md bg-slate-400"></div>
        <p className=" text-white">
          Copyright 2024 &copy; Edemy. All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
