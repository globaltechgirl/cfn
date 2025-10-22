import { createBrowserRouter, Navigate } from "react-router-dom";
import PrivateLayout from "@/component/layout/privateLayout";
import AuthGuard from "@/router/authGuard";

import Home from "@/pages/home";
import About from "@/pages/about";
import PresidentsView from "@/component/about/presidentsView";
import Cooperative from "@/pages/cooperative";
import Newsroom from "@/pages/newsroom";
import NewsroomViews from "@/component/newsroom/newsroomViews";
import Events from "@/pages/events";
import EventsCard from "@/component/events/eventsCard";
import EventsViews from "@/component/events/eventsViews";
import Connect from "@/pages/connect";

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
          { path: "about/:id", element: <PresidentsView /> },
          { path: "cooperative", element: <Cooperative /> },
          { path: "newsroom", element: <Newsroom /> },
          { path: "newsroom/:id", element: <NewsroomViews /> },
          {
            path: "events",
            element: <Events />,
            children: [
              { index: true, element: <EventsCard /> },
              { path: ":id", element: <EventsViews /> },
            ],
          },
          { path: "connect", element: <Connect /> },
          { path: "*", element: <Navigate to="/home" replace /> },
        ],
      },
    ],
  },
]);

export default router;
