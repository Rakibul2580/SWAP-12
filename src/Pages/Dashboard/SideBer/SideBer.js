import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const SideBer = () => {
  const { user } = useContext(AuthContext);
  const [userStatus, setUserStatus] = useState({});
  useEffect(() => {
    fetch(`https://shop-server-rakibul2580.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserStatus(data))
      .catch((error) => console.log(error));
  }, [user?.email]);
  const menuList = (
    <>
      <li className="flex">
        <NavLink
          to="/Dashboard/myOrders"
          className={({ isActive }) =>
            isActive
              ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
              : "flex items-center px-4 -mb-1"
          }
        >
          My Orders
        </NavLink>
      </li>

      {userStatus?.userStatus ||
        (userStatus?.admin && (
          <li className="flex">
            <NavLink
              to="/Dashboard/myProducts"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                  : "flex items-center px-4 -mb-1"
              }
            >
              My Products
            </NavLink>
          </li>
        ))}

      {userStatus?.userStatus ||
        (userStatus?.admin && (
          <li className="flex">
            <NavLink
              to="/Dashboard/AddProduct"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                  : "flex items-center px-4 -mb-1"
              }
            >
              Add Product
            </NavLink>
          </li>
        ))}
    </>
  );
  return (
    <div>
      <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
              Getting Started
            </h2>
            <div className="flex flex-col space-y-1">
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
              >
                {menuList}
              </ul>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default SideBer;
