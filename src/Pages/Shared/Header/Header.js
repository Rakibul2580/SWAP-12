import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelSignOut = () => {
    logOut().then((result) => {
      navigate("/");
    });
  };

  const menuList = (
    <>
      <li className="flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
              : "flex items-center px-4 -mb-1"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
              : "flex items-center px-4 -mb-1"
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  const endMenu = (
    <>
      {user?.uid ? (
        <>
          <li className="flex">
            <NavLink
              to="/Dashboard"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                  : "flex items-center px-4 -mb-1"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <button
            onClick={handelSignOut}
            className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          <Link to="/signup" className="self-center px-8 py-3 rounded">
            Register
          </Link>
          <Link
            to="/login"
            className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Login
          </Link>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuList}
            {endMenu}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">SWAP</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuList}</ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex">{endMenu}</ul>
      </div>
    </div>
  );
};

export default Header;
