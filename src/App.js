import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Header from "./Pages/Shared/Header/Header";
import { router } from "./Routes/Routes/Route";

function App() {
  return (
    <div className="App">
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
