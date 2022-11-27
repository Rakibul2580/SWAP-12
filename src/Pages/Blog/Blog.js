import React from "react";

const Blog = () => {
  return (
    <section className="dark:bg-gray-100 mt-10 dark:text-gray-800">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  What are the different ways to manage a state in a React
                  application?
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                  Dec 2020
                </time>
                <p className="mt-3">
                  Not only are there are a lot of different kinds of state, but
                  there often dozens of ways of managing each kind. Which should
                  you choose? In this guide, we will uncover the several kinds
                  of state in your React apps that you might not be aware of,
                  plus how to manage them in the most effective way.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  How does prototypical inheritance work?
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                  Jul 2019
                </time>
                <p className="mt-3">
                  The Prototypal Inheritance is a feature in javascript used to
                  add methods and properties in objects. It is a method by which
                  an object can inherit the properties and methods of another
                  object. Traditionally, in order to get and set the Prototype
                  of an object, we use Object. getPrototypeOf and Object
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  What is a unit test? Why should we write unit tests?
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                  Jan 2016
                </time>
                <p className="mt-3">
                  The main objective of unit testing is to isolate written code
                  to test and determine if it works as intended. Unit testing is
                  an important step in the development process, because if done
                  correctly, it can help detect early flaws in code which may be
                  more difficult to find in later testing stages.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  React vs. Angular vs. Vue?
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                  Jan 2016
                </time>
                <p className="mt-3">
                  Vue provides higher customizability and hence is easier to
                  learn than Angular or React. Further, Vue has an overlap with
                  Angular and React with respect to their functionality like the
                  use of components. Hence, the transition to Vue from either of
                  the two is an easy option.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
