import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct/AddProduct";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LotIn/LogIn";
import MyProducts from "../../Pages/MyProducts/MyProducts/MyProducts";
import Payment from "../../Pages/MyProducts/Payment/Payment";
import Products from "../../Pages/Products/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
      { path: "/Dashboard", element: <Dashboard /> },
      { path: "/AddProduct", element: <AddProduct /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/myProducts", element: <MyProducts /> },
    ],
  },
]);
