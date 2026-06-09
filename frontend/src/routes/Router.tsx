import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayouts";
import HomeLayouts from "../layouts/HomeLayouts";
import About from "../pages/about/About";
import Problem from "../pages/problem-solution/Problem";
import Solution from "../pages/problem-solution/Solution";
import Technology from "../pages/technology/Technoloy";
import Contact from "../pages/Contact";
import BusinessModel from "../pages/business/BusinessModel";
import Impact from "../pages/impact/Impact";
import Team from "../pages/Team/Team";
import Roadmap from "../pages/roadnmap/Roadmap";
import Funding from "../pages/Funding";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomeLayouts /> },
      { path: "about", element: <About /> },
      { path: "problem", element: <Problem /> },
      { path: "solution", element: <Solution /> },
      { path: "technology", element: <Technology /> },
      { path: "contact", element: <Contact /> },
      { path: "business-model", element: <BusinessModel /> },
      { path: "impact", element: <Impact /> },
      { path: "team", element: <Team /> },
      { path: "roadmap", element: <Roadmap /> },
      { path: "funding", element: <Funding /> },

    ],
  },
]);