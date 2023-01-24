import {createBrowserRouter} from "react-router-dom";
import AddPage from "../Pages/AddPage/AddPage";
import HomePage from "../Pages/HomePage/HomePage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
        path: "/addpage",
        element: <AddPage/>,
      },

  ]);
  export default router