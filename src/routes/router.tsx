import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/poll-widget",
    element: <h3 className="p-28">poll widget</h3>
  }
]);
