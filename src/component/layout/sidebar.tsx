import { Box, UnstyledButton, Image } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import type { CSSProperties, FC } from "react";
import CFNLogo from "@/assets/cfn.svg";

interface MenuItem {
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
  { label: "Cooperative", path: "/cooperative" },
  { label: "Newsroom", path: "/newsroom" },
  { label: "Events", path: "/events" },
  { label: "Connect", path: "/connect" },
];

const styles: Record<string, CSSProperties> = {
  sidebar: {
    width: "100%",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: "0 2rem",
    background: "var(--white-100)",
  },

  logo: {
    height: 35,
    objectFit: "contain",
  },

  menuWrapper: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
  },

  menuContainer: {
    display: "flex",
    gap: "2rem",
  },

  menuButton: {
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 12,
    color: "var(--black-100)",
    textDecoration: "none",
    transition: "color 0.2s ease",
  },

  activeButton: {
    color: "var(--green-100)",
  },

  cfnPortal: {
    borderRadius: 6,
    padding: "2px 6px",
    backgroundColor: "var(--green-100)",
    color: "var(--white-100)",
    fontWeight: 600,
    fontSize: 10,
  },
};

const SidebarPage: FC = () => {
  const location = useLocation();

  return (
    <Box style={styles.sidebar}>
      <Box>
        <Image src={CFNLogo} alt="CFN Logo" style={styles.logo} />
      </Box>

      <Box style={styles.menuWrapper}>
        <Box style={styles.menuContainer}>
          {menuItems.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <UnstyledButton
                key={path}
                component={Link}
                to={path}
                style={{
                  ...styles.menuButton,
                  ...(isActive ? styles.activeButton : {}),
                }}
              >
                {label}
              </UnstyledButton>
            );
          })}
        </Box>
      </Box>

      <Box style={styles.cfnPortal}>CFN Portal</Box>
    </Box>
  );
};

export default SidebarPage;
