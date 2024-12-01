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
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/addFashion',
        element:<AddFashion/>
      },
      {
        path:'/updateFashion',
        element:<UpdateFashion/>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
