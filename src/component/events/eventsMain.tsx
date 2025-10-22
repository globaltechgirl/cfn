import { Box, Text } from "@mantine/core";
import type { FC, CSSProperties } from "react";
import { Outlet } from "react-router-dom";

const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: 25,
    marginTop: 100,
    marginBottom: 50,
  },
  layeredTextContainer: {
    lineHeight: 1.1,
    textAlign: "center",
    maxWidth: "70%",
    marginBottom: 20,
  },
  centerText: {
    fontSize: 60,
    fontWeight: 700,
    color: "var(--black-100)",
  },
  spanText: {
    fontSize: 60,
    fontWeight: 700,
    color: "var(--green-100)",
    animation: "wave 3s ease-in-out infinite",
  },
  outletWrapper: {
    width: "100%",
  },
};

const EventsMain: FC = () => (
  <Box style={styles.container}>
    <Box style={styles.layeredTextContainer}>
      <Text style={styles.centerText}>
        CFN <span style={styles.spanText}>Events</span>
      </Text>
    </Box>

    <Box style={styles.outletWrapper}>
      <Outlet />
    </Box>
  </Box>
);

export default EventsMain;
