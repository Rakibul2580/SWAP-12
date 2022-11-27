import React from "react";
import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import notFound from "./76695-not-found.gif";
import error404 from "./93899-error-404.gif";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="block md:flex pt-5 pb-20">
        <div className="md:w-50">
          <img src={notFound} alt="" />
        </div>
        <div className="md:w-50">
          <div className="flex items-center h-full">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto">
              <div className="max-w-md text-center">
                <h2 className="font-extrabold text-9xl dark:text-gray-600">
                  <img src={error404} alt="" />
                </h2>
                <p className="text-2xl font-semibold md:text-3xl">
                  Sorry, we couldn't find this page.
                </p>
                <p className="mt-4 mb-8">
                  But dont worry, you can find plenty of other things on our
                  homepage.
                </p>
                <Link
                  rel="noopener noreferrer"
                  to="/"
                  className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                >
                  Back to homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
