import "./assets/../assets/css/reset.css";
import "./assets/../assets/css/custom.css";
import Navbar from "./layout/Header/Navbar";
import Footer from "./layout/Footer/Footer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage';
import ProjectPage from './Pages/ProjectPage';
import SkillsPage from './Pages/SkillsPage';
import ContactPage from './Pages/ContractPage';
import Route from './Route/Route';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Route/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/skills",
        element: <SkillsPage />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ]
  }
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
