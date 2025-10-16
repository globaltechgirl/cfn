export const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const ROUTES = {
  HOME: "/home",
  ABOUT: "/about",
  COOPERATIVE: "/cooperative",
  MEDIA: "/media",
  CONTACT: "/contact",
};

export const NavLinks = [
  { label: "Home", link: ROUTES.HOME },
  { label: "About", link: ROUTES.ABOUT },
  { label: "Cooperative", link: ROUTES.COOPERATIVE },
  { label: "Media", link: ROUTES.MEDIA },
  { label: "Contact Us", link: ROUTES.CONTACT },
];
