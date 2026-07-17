import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../components/layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: "/poll-widget",
    element: (
      <MainLayout>
        <h3 className="p-28">poll widget</h3>
      </MainLayout>
    ),
  },
]);
