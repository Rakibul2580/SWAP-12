import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const [seller, setSeller] = useState("");
  const { signUp, signInWithGoogle, updatePro } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handelSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const userStatus = seller;
    const user = {
      name,
      email,
      userStatus,
      admin: false,
    };
    signUp(email, password)
      .then((result) => {
        updatePro(name)
          .then((result) => {
            fetch("https://shop-server-rakibul2580.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => {
                form.reset();
                navigate(from, { replace: true });
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const handelGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="md:w-4/12 w-full mx-auto my-20 text-left">
      <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
          Sign Up
        </h3>
        <form onSubmit={handelSignUp}>
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="firstName"
              className="inline-block mb-1 font-medium"
            >
              Full name
            </label>
            <input
              placeholder="Name"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="fullName"
              name="fullName"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="email" className="inline-block mb-1 font-medium">
              E-mail
            </label>
            <input
              placeholder="Email"
              required
              type="email"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="password" className="inline-block mb-1 font-medium">
              Password
            </label>
            <input
              placeholder="Password"
              required
              type="password"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
            />

            <div className="flex justify-around my-2">
              <label
                onClick={() => setSeller("")}
                className="flex items-center text-black font-medium mt-3"
              >
                <input
                  type="radio"
                  name="radio-6"
                  className="radio radio-primary"
                  required
                />
                <p className="ml-2">User</p>
              </label>
              <label
                onClick={() => setSeller("seller")}
                className="flex items-center text-black font-medium mt-3"
              >
                <input
                  type="radio"
                  name="radio-6"
                  className="radio radio-primary"
                  required
                />
                <p className="ml-2">Seller</p>
              </label>
            </div>
          </div>
          <div className="mt-4 mb-2 sm:mb-4">
            <button
              type="submit"
              className="w-full h-12 px-6 font-medium text-white rounded shadow-md bg-slate-400"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            SignUp with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handelGoogleSignIn}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="text-md text-center sm:px-6 dark:text-gray-400">
          have an account?
          <Link to="/login" className="underline text-sky-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
