import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LotIn/LogIn";
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
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      { path: "/login", element: <LogIn /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);
