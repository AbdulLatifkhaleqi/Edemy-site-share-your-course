import { assets } from '../assets/assets';

function Logos() {
  return (
    <div className="mt-[2rem] flex w-full flex-col items-center gap-3 max-md:px-[2rem] max-sm:px-[1rem] ">
      <div>
        <h1 className="text-lg text-black ">Trusted by learners from</h1>
      </div>
      <div className="items- flex justify-center gap-[3rem] max-md:flex max-md:flex-wrap max-md:gap-[1.4rem] ">
        <img src={assets.microsoft_logo} alt="microsoft" />
        <img src={assets.walmart_logo} alt="walmart" />
        <img src={assets.accenture_logo} alt="accsenture" />
        <img src={assets.adobe_logo} alt="adobe" />
        <img src={assets.paypal_logo} alt="paypal" />
      </div>
    </div>
  );
}

export default Logos;
