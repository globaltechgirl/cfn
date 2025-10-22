export const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const ROUTES = {
  HOME: "/home",
  ABOUT: "/about",
  ABOUT_PRESIDENTS: "/about/:id",
  COOPERATIVE: "/cooperative",
  NEWSROOM: "/newsroom",
  NEWSROOM_DETAIL: "/newsroom/:id",
  EVENTS: "/events",
  EVENTS_DETAIL: "/events/:id",
  CONNECT: "/connect",
};

export const NavLinks = [
  { label: "Home", link: ROUTES.HOME },
  { label: "About", link: ROUTES.ABOUT },
  { label: "Cooperative", link: ROUTES.COOPERATIVE },
  { label: "Newsroom", link: ROUTES.NEWSROOM },
  { label: "Events", link: ROUTES.EVENTS },
  { label: "Connect", link: ROUTES.CONNECT },
];
