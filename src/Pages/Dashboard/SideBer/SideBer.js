import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
        <Link
          to="/Dashboard/myOrders"
          className={({ isActive }) =>
            isActive
              ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
              : "flex items-center px-4 -mb-1"
          }
        >
          My Orders
        </Link>
      </li>

      {userStatus?.userStatus && (
        <li className="flex">
          <Link
            to="/Dashboard/myProducts"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                : "flex items-center px-4 -mb-1"
            }
          >
            My Products
          </Link>
        </li>
      )}

      {userStatus?.userStatus && (
        <li className="flex">
          <Link
            to="/Dashboard"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                : "flex items-center px-4 -mb-1"
            }
          >
            Add Product
          </Link>
        </li>
      )}
      {userStatus?.admin && (
        <li className="flex">
          <Link
            to="/Dashboard/seller"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                : "flex items-center px-4 -mb-1"
            }
          >
            All Seller
          </Link>
        </li>
      )}
      {userStatus?.admin && (
        <li className="flex">
          <Link
            to="/Dashboard/user"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                : "flex items-center px-4 -mb-1"
            }
          >
            All User
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <aside className="w-full p-6 sm:w-60 dark:bg-gray-100 h-screen dark:text-gray-900">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
              Getting Started
            </h2>
            <div className="flex flex-col space-y-1">
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 "
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
