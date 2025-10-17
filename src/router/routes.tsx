import { createBrowserRouter, Navigate } from "react-router-dom";
import PrivateLayout from "@/component/layout/privateLayout";
import AuthGuard from "@/router/authGuard";

import Home from "@/pages/home";
import About from "@/pages/about";
import Cooperative from "@/pages/cooperative";
import Media from "@/pages/media";
import Views from "@/component/media/views";
import Contact from "@/pages/contact";

import { ROUTES } from "@/utils/constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthGuard />,
    children: [
      {
        element: <PrivateLayout />,
        children: [
          { path: "", element: <Navigate to={ROUTES.HOME} replace /> },
          { path: "home", element: <Home /> },
          { path: "about", element: <About /> },
          { path: "cooperative", element: <Cooperative /> },
          { path: "media", element: <Media /> },
          { path: "media/:id", element: <Views/> },
          { path: "contact", element: <Contact /> },
          { path: "*", element: <Navigate to="/home" replace /> },
        ],
      },
    ],
  },
]);

export default router;
