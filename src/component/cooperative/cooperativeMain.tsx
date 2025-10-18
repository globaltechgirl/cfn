import { Box, Text } from "@mantine/core";
import type { FC, CSSProperties } from "react";
import CooperativeCard from "./cooperatureCard";
import CooperativeValues from "./cooperativeValues";

const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: 25,
    marginTop: 100,
  },
  layeredTextContainer: {
    lineHeight: 1.1,
    textAlign: "center",
    maxWidth: "70%",
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
};

const CooperativeMain: FC = () => (
  <Box style={styles.container}>
    <Box style={styles.layeredTextContainer}>
      <Text style={styles.centerText}>
        Co<span style={styles.spanText}>pperative</span>
      </Text>
    </Box>

    <CooperativeCard />

    <CooperativeValues />
  </Box>
);

export default CooperativeMain;
