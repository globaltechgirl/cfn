import { AppShell, Box } from "@mantine/core";
import type { AppShellProps } from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";
import { type FC, type CSSProperties } from "react";

import SidebarPage from "@/component/layout/sidebar";
import Footer from "./footer";

const PrivateLayout: FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  const containerStyle: CSSProperties = {
    backgroundColor: isHome ? "var(--white-100)" : "transparent",
    minHeight: "100vh",
    transition: "background-color 0.3s ease",
    padding: isHome ? "0.01rem" : "0",
  };

  const appShellStyles: AppShellProps["styles"] = {
    main: {
      minHeight: "100vh",
      backgroundColor: isHome ? "var(--green-300)" : "transparent",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <Box style={containerStyle}>
      <AppShell padding="sm" styles={appShellStyles} withBorder={false}>
        <SidebarPage />
        <Outlet />
        <Footer />
      </AppShell>
    </Box>
  );
};

export default PrivateLayout;
