import React from "react";

const HomeBanner = () => {
  return (
    <div>
      <div className="saturate-200 bg-center bg-no-repeat bg-cover bg-[url('https://i.ibb.co/tZWGxq8/Blue-Liquid-Art-Design-Gallery-Intro-Video-3.gif')]">
        <div className="container flex flex-col items-center px-4 py-26 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-white">
            Motorbikes are now at their lowest prices of the year.
          </h1>
          <p className="mt-6 mb-8 text-xl sm:mb-12 xl:max-w-3xl dark:text-white">
            SuperBike is first ever marketplace where consumers will be able to
            sell off their old
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
// https://i.ibb.co/NLSyrG3/1.jpg
