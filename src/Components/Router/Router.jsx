import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import AppliedJobs from "../../AppliedJobs";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import JobsPage from "../JobsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/job/:id",
        element: <JobsPage />,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);
