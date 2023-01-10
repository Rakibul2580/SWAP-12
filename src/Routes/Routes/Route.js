import { createBrowserRouter } from "react-router-dom";
import DashboardLayOut from "../../layout/DashboardLayOut";
import Main from "../../layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct/AddProduct";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LotIn/LogIn";
import MyAddProducts from "../../Pages/MyAddProducts/MyAddProducts/MyAddProducts";
import MyProducts from "../../Pages/MyProducts/MyProducts/MyProducts";
import Payment from "../../Pages/MyProducts/Payment/Payment";
import Products from "../../Pages/Products/Products/Products";
import Seller from "../../Pages/Seller/Seller/Seller";
import SignUp from "../../Pages/SignUp/SignUp";
import User from "../../Pages/User/User/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/Products/:id",
        element: <Products />,
        loader: ({ params }) =>
          fetch(
            `https://shop-server-rakibul2580.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(
            `https://shop-server-rakibul2580.vercel.app/Product/${params.id}`
          ),
      },

      { path: "/login", element: <LogIn /> },
      { path: "/blog", element: <Blog /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
  {
    path: "/Dashboard",
    element: <DashboardLayOut />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/Dashboard/myOrders", element: <MyProducts /> },
      { path: "/Dashboard/myProducts", element: <MyAddProducts /> },
      { path: "/Dashboard", element: <AddProduct /> },
      { path: "/Dashboard/seller", element: <Seller /> },
      { path: "/Dashboard/user", element: <User /> },
    ],
  },
]);
