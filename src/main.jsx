import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./components/Mainlayout.jsx";
import Home from "./components/Home.jsx";
import AddFashion from "./components/AddFashion.jsx";
import UpdateFashion from "./components/UpdateFashion.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:4500/fashions"),
      },
      {
        path: "/addFashion",
        element: <AddFashion />,
      },
      {
        path: "/updateFashion/:id",
        element: <UpdateFashion />,
        loader: ({ params }) =>
          fetch(`http://localhost:4500/fashions/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
