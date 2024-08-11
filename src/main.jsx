import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from "./Root";
import About from "./routes/About";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "about",
    element: <About />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
