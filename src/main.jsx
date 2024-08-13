import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from "./Root";
import About from "./routes/About";
import Packages from "./routes/Packages";
import './index.css'
import Contact from './routes/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "packages",
    element: <Packages />,
  },
  // {
  //   path: "gallery",
  //   element: <Gallery />
  // },
  {
    path: "contact",
    element: <Contact />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
