import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div>
      <div className="saturate-200 bg-center bg-no-repeat bg-cover bg-[url('https://t4.ftcdn.net/jpg/02/18/18/55/360_F_218185587_P4zituDtWJOfClUKL6merI0BgLMIxoeC.jpg')]">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-white">
            TVs are now at their lowest prices of the year.
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-white">
            SWAP is first ever C2B marketplace where consumers will be able to
            sell off their old
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
