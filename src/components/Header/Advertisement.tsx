import { Link } from "react-router-dom";

const Advertisement = () => {
  return (
    <>
      <div className="container">
        <div className="relative">
          <img className="ml-auto mr-auto w-full md:w-auto" src="/images/baner.png" alt="" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
            <p className="text-white font-bold text-[16px] sm:text-[24px] md:text-[32px] lg:text-[40px]">
              Get 50% Off on <br /> Selected categories
            </p>
            <button className="mt-4 sm:mt-8 md:mt-15 px-6 sm:px-10 py-1 sm:py-1.5 bg-white text-pink-700 rounded-4xl text-[14px] sm:text-[16px] md:text-[20px] font-medium cursor-pointer hover:text-white hover:bg-pink-600 transition">
              <Link to="/products">Shop Now</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertisement;